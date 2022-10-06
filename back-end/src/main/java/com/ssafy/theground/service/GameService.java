package com.ssafy.theground.service;

import com.ssafy.theground.dto.res.*;
import com.ssafy.theground.entity.*;
import com.ssafy.theground.repository.*;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.*;

@Service
@RequiredArgsConstructor
public class GameService {

    private enum SwingResult {
        SINGLE, DOUBLE, TRIPLE, HOMERUN, GROUNDOUT, FLYOUT, FOUL, SWING, BALL, STRIKE
    }

    private final UserRepository userRepository;
    private final JwtService jwtService;
    private final MatchRepository matchRepository;
    private final LogoRepository logoRepository;
    private final TeamSettingRepository teamSettingRepository;
    private final ManagePitcherRepository managePitcherRepository;
    private final ManageHitterRepository manageHitterRepository;
    private final PitcherRepository pitcherRepository;
    private final HitterRepository hitterRepository;
    private final AITeamRepository aiTeamRepository;
    private final AISettingRepository aiSettingRepository;
    private final LogRepository logRepository;
    private final MatchSettingRepository matchSettingRepository;
    private final ScoreboardRepository scoreboardRepository;
    private final DescriptionRepository descriptionRepository;
    private final UserPitcherRepository userPitcherRepository;
    private final UserHitterRepository userHitterRepository;
    private final OutPlayerRepository outPlayerRepository;
    private final ScheduleRepository scheduleRepository;

    private final String[] pitchTypes = { "fourSeam", "slider", "sinker", "changeUp", "curve", "cutter", "knuckleCurve", "splitter", "twoSeam", "knuckleball", "eephus", "screwball" };


    public Map<String, BriefInfoResDto> teamBriefInfo() throws Exception {
        Map<String, BriefInfoResDto> map = new HashMap<>();

        Optional<User> byUserUid = userRepository.findByUserUid(jwtService.getUserUid(jwtService.getJwt()));
        if (byUserUid.isPresent()) {

            // 매치 불러오기
            List<Match> ByUserSeq = matchRepository.findByUserSeq(byUserUid.get());
            Match match = ByUserSeq.get(ByUserSeq.size() - 1);

            Log log = new Log();
            Description description = Description.builder()
                    .match(match).build();
            descriptionRepository.save(description);
            MatchSetting matchSetting = MatchSetting.builder()
                    .matchSeq(match.getMatchSeq()).build();
            matchSettingRepository.save(matchSetting);
            Scoreboard scoreboard = Scoreboard.builder()
                    .matchSeq(match.getMatchSeq()).build();
            scoreboardRepository.save(scoreboard);

            boolean matchHomeFlag = match.getMatchHomeFlag();
            BriefInfoResDto homeTeam = new BriefInfoResDto();
            BriefInfoResDto awayTeam = new BriefInfoResDto();
            BriefInfoResDto matchSeq = new BriefInfoResDto();

            // 유저가 Home
            if (matchHomeFlag) {
                homeTeam.setTeamName(byUserUid.get().getUserTeamname());
                homeTeam.setTeamLogoUrl(byUserUid.get().getLogo().getLogoUrl());
                homeTeam.setTeamWin(byUserUid.get().getUserWin());
                homeTeam.setTeamLose(byUserUid.get().getUserLose());
                homeTeam.setTeamDraw(byUserUid.get().getUserDraw());
                TeamSetting byUserSeq = teamSettingRepository.findByUserSeq_UserSeq(byUserUid.get().getUserSeq());
                UserPitcher nextPitcherSeq = userPitcherRepository.findByUserPitcherSeq(byUserSeq.getTeamSettingNextSp().longValue());
                homeTeam.setStartingPitcher(pitcherRepository
                        .findByPitcherSeq(nextPitcherSeq.getPitcherSeq()).getPitcherSeq());
                map.put("home", homeTeam);

                AITeam byAITeamSeq = aiTeamRepository.findByAiTeamSeq(match.getAiTeamSeq());
                awayTeam.setTeamName(byAITeamSeq.getAiTeamName());
                String logoUrl = logoRepository.findByLogoSeq(byAITeamSeq.getLogoSeq().getLogoSeq()).getLogoUrl();
                awayTeam.setTeamLogoUrl(logoUrl);
                map.put("away", awayTeam);

                matchSeq.setTeamName(homeTeam.getTeamName());
                matchSeq.setStartingPitcher(match.getMatchSeq());
                map.put("matchSeq", matchSeq);
            }
            // 유저가 Away
            else {
                awayTeam.setTeamName(byUserUid.get().getUserTeamname());
                awayTeam.setTeamLogoUrl(byUserUid.get().getLogo().getLogoUrl());
                awayTeam.setTeamWin(byUserUid.get().getUserWin());
                awayTeam.setTeamLose(byUserUid.get().getUserLose());
                awayTeam.setTeamDraw(byUserUid.get().getUserDraw());
                TeamSetting byUserSeq = teamSettingRepository.findByUserSeq_UserSeq(byUserUid.get().getUserSeq());
                UserPitcher nextPitcherSeq = userPitcherRepository.findByUserPitcherSeq(byUserSeq.getTeamSettingNextSp().longValue());
                awayTeam.setStartingPitcher(pitcherRepository
                        .findByPitcherSeq(nextPitcherSeq.getPitcherSeq()).getPitcherSeq());
                map.put("away", awayTeam);

                AITeam byAITeamSeq = aiTeamRepository.findByAiTeamSeq(match.getAiTeamSeq());
                homeTeam.setTeamName(byAITeamSeq.getAiTeamName());
                String logoUrl = logoRepository.findByLogoSeq(byAITeamSeq.getLogoSeq().getLogoSeq()).getLogoUrl();
                homeTeam.setTeamLogoUrl(logoUrl);
                map.put("home", homeTeam);

                matchSeq.setStartingPitcher(match.getMatchSeq());
                map.put("matchSeq", matchSeq);
            }

            logRepository.save(log.builder()
                    .matchSeq(match.getMatchSeq())
                    .logInning(1)
                    .logHalf("TOP")
                    .logOut(0)
                    .logPitcher(homeTeam.getStartingPitcher())
                    .logHitter(null)
                    .log1stBase(null)
                    .log2ndBase(null)
                    .log3rdBase(null)
                    .build());

            return map;
        }
        else return null;
    }

    public Map<String, Object> battingSimulate(String uid) {
        long matchSeq = matchRepository.findTop1ByUserSeq_UserUidOrderByMatchSeq(uid).getMatchSeq();
        Log log = logRepository.findByMatchSeq(matchSeq);
        MatchSetting setting = matchSettingRepository.findByMatchSeq(matchSeq).get();
        Scoreboard scoreboard = scoreboardRepository.findByMatchSeq(matchSeq);
        Description descriptions = descriptionRepository.findByMatch_MatchSeq(matchSeq);

        long pitcherSeq = log.getLogPitcher();
        Pitcher pitcher = pitcherRepository.findByPitcherSeq(pitcherSeq);
        String pitcherName = pitcher.getPitcherName();
        long hitterSeq = log.getLogHitter();
        Hitter hitter = hitterRepository.findByHitterSeq(hitterSeq);
        String hitterName = hitter.getHitterName();

        Long log1stBase = log.getLog1stBase();
        String base1Name = null;
        if (log1stBase != null) base1Name = hitterRepository.findByHitterSeq(log1stBase).getHitterName();
        Long log2ndBase = log.getLog2ndBase();
        String base2Name = null;
        if (log2ndBase != null) base2Name = hitterRepository.findByHitterSeq(log2ndBase).getHitterName();
        Long log3rdBase = log.getLog3rdBase();
        String base3Name = null;
        if (log3rdBase != null) base3Name = hitterRepository.findByHitterSeq(log3rdBase).getHitterName();
        
        int inning = log.getLogInning();
        String half = log.getLogHalf();
        int out = log.getLogOut();
        int ball = 0;
        int strike = 0;
        int run = 0;
        int count = 0;
        StringBuilder eventSB = new StringBuilder();
        StringBuilder fullSB = new StringBuilder();

        int nextBat = setting.getMatchSettingNextBat();
        eventSB.append(nextBat == 0 ? 9 : nextBat).append("번 타자 ").append(hitterName).append("\n");

        boolean isEnd = false;
        LinkedList<PitchResDto> pitches = new LinkedList<>();

        while (!isEnd) {
            PitchResDto pitch = new PitchResDto();
            String description = null;
            count++;

            /* 구종 구사 비율을 통해 구종 결정 */
            int[] pitchRatio = new int[pitchTypes.length];
            pitchRatio[0] = pitcher.getFourSeam();
            pitchRatio[1] = pitcher.getSlider();
            pitchRatio[2] = pitcher.getSinker();
            pitchRatio[3] = pitcher.getChangeUp();
            pitchRatio[4] = pitcher.getCurve();
            pitchRatio[5] = pitcher.getCutter();
            pitchRatio[6] = pitcher.getKnuckleCurve();
            pitchRatio[7] = pitcher.getSplitter();
            pitchRatio[8] = pitcher.getTwoSeam();
            pitchRatio[9] = pitcher.getKnuckleball();
            pitchRatio[10] = pitcher.getEephus();
            pitchRatio[11] = pitcher.getScrewball();

            int sum = 0;
            for (int i : pitchRatio) {
                sum += i;
            }

            int rand = (int) (Math.random() * sum);
            int range = 0;
            String pitchType = null;
            for (int i = 0; i < pitchRatio.length; i++) {
                range += pitchRatio[i];
                if (rand < range) {
                    pitchType = pitchTypes[i];
                    break;
                }
            }
            if (pitchType == null) pitchType = pitchTypes[0];

            // 구종과 최대 구속을 통해 구속 결정
            double maxVelocity = pitcher.getMaxVelocity();
            double velocity = maxVelocity - Math.random() * 5;
            switch (pitchType) {
                case "slider":
                    velocity = -7.5;
                    break;
                case "sinker":
                case "twoSeam":
                    velocity = -2;
                    break;
                case "changeUp":
                    velocity = -9;
                    break;
                case "curve":
                    velocity = -14;
                    break;
                case "cutter":
                    velocity = -4.5;
                    break;
                case "knuckleCurve":
                    velocity = -11.5;
                    break;
                case "splitter":
                    velocity = -7;
                    break;
                case "knuckleball":
                    velocity = -23;
                    break;
                case "eephus":
                    velocity = -30;
                    break;
                case "screwball":
                    velocity = -19;
                    break;
                case "fourSeam":
                default:
                    break;
            }

            // 공 좌표 및 zone 결정
            double ballX = new Random().nextGaussian() * 0.6;
            double ballY = new Random().nextGaussian() * 0.72;
            int zone;
            if ((ballX < -0.75 || ballX > 0.75) || (ballY < -0.9 || ballY > 0.9)) {
                if (ballY < 0) {
                    if (ballX < 0) {
                        zone = 11;
                    } else {
                        zone = 12;
                    }
                } else {
                    if (ballX < 0) {
                        zone = 13;
                    } else {
                        zone = 14;
                    }
                }
            } else {
                if (ballY < -0.3) {
                    if (ballX < -0.25) {
                        zone = 1;
                    } else if (ballX < 0.25) {
                        zone = 2;
                    } else {
                        zone = 3;
                    }
                } else if (ballY < 0.3) {
                    if (ballX < -0.25) {
                        zone = 4;
                    } else if (ballX < 0.25) {
                        zone = 5;
                    } else {
                        zone = 6;
                    }
                } else {
                    if (ballX < -0.25) {
                        zone = 7;
                    } else if (ballX < 0.25) {
                        zone = 8;
                    } else {
                        zone = 9;
                    }
                }
            }

            // 타격
            double rate;
            switch (zone) {
                case 1:
                    rate = hitter.getZone();
                    break;
                case 2:
                    rate = hitter.getZone2();
                    break;
                case 3:
                    rate = hitter.getZone3();
                    break;
                case 4:
                    rate = hitter.getZone4();
                    break;
                case 6:
                    rate = hitter.getZone6();
                    break;
                case 7:
                    rate = hitter.getZone7();
                    break;
                case 8:
                    rate = hitter.getZone8();
                    break;
                case 9:
                    rate = hitter.getZone9();
                    break;
                case 11:
                    rate = hitter.getZone11();
                    break;
                case 12:
                    rate = hitter.getZone12();
                    break;
                case 13:
                    rate = hitter.getZone13();
                    break;
                case 14:
                    rate = hitter.getZone14();
                    break;
                case 5:
                default:
                    rate = hitter.getZone5();
                    break;
            }
            double swing = Math.min(rate * 3, 1.0);
            SwingResult result;
            Random random = new Random();
            random.setSeed(System.currentTimeMillis());

            if (swing > random.nextDouble()) { // 스윙을 한 경우
                random.setSeed(System.currentTimeMillis());
                if (rate > random.nextDouble()) { // 안타인 경우
                    int[] hit = new int[4];
                    hit[0] = hitter.getHit();
                    hit[1] = hitter.getDoubles();
                    hit[2] = hitter.getTriple();
                    hit[3] = hitter.getHomerun();
                    int hitTotal = hit[0] + hit[1] + hit[2] + hit[3];
                    random.setSeed(System.currentTimeMillis());
                    int randParam = random.nextInt(hitTotal) + 1;
                    if (randParam <= hit[0]) {
                        result = SwingResult.SINGLE;
                    } else if (randParam <= hit[1]) {
                        result = SwingResult.DOUBLE;
                    } else if (randParam <= hit[2]) {
                        result = SwingResult.TRIPLE;
                    } else {
                        result = SwingResult.HOMERUN;
                        if (half.equals("Top")) {
                            scoreboard.setScoreboardAwayHomerun(scoreboard.getScoreboardAwayHomerun() + 1);
                        } else {
                            scoreboard.setScoreboardHomeHomerun(scoreboard.getScoreboardHomeHomerun() + 1);
                        }
                    }
                    if (half.equals("Top")) {
                        scoreboard.setScoreboardAwayHit(scoreboard.getScoreboardAwayHit() + 1);
                    } else {
                        scoreboard.setScoreboardHomeHit(scoreboard.getScoreboardHomeHit() + 1);
                    }
                } else {    // 안타가 아닌 경우
                    random.setSeed(System.currentTimeMillis());
                    int randParam = random.nextInt(99) + 1;
                    if (randParam <= 15) { // 땅볼
                        result = SwingResult.GROUNDOUT;
                    } else if (randParam <= 23) { // 뜬공
                        result = SwingResult.FLYOUT;
                    } else if (randParam <= 71) { // 파울
                        result = SwingResult.FOUL;
                    } else { // 헛스윙
                        result = SwingResult.SWING;
                    }
                }
            } else { // 스윙을 안한 경우
                if (zone <= 9) { // 스트라이크
                    result = SwingResult.STRIKE;
                } else { // 볼
                    result = SwingResult.BALL;
                }
            }

            // 타격 결과에 따른 경기 흐름 변화
            switch (result) {
                case SINGLE:
                    description = count + "구 타격 : 안타";
                    if (log3rdBase != null) { // 3루 주자 있을 때
                        log.setLog3rdBase(null); // 3루 비우고
                        run++;
                        eventSB.append("3루 주자 ").append(base3Name).append(" 득점\n");
                    }
                    if (log2ndBase != null) { // 2루 주자 있을 때
                        log.setLog2ndBase(null); // 2루 비우고
                        run++;
                        eventSB.append("2루 주자 ").append(base2Name).append(" 득점\n");
                    }
                    if (log1stBase != null) { // 1루 주자 있을 때
                        log.setLog1stBase(null); // 1루 비우고
                        log.setLog2ndBase(log1stBase); // 2루로 이동
                        eventSB.append("1루 주자 ").append(base1Name).append(" 2루까지 진루\n");
                    }
                    log.setLog1stBase(hitterSeq); // 타자는 1루로 이동
                    isEnd = true;
                    break;
                case DOUBLE:
                    description = count + "구 타격 : 2루타";
                    if (log3rdBase != null) { // 3루 주자 있을 때
                        log.setLog3rdBase(null); // 3루 비우고
                        run++;
                        eventSB.append("3루 주자 ").append(base3Name).append(" 득점\n");
                    }
                    if (log2ndBase != null) { // 2루 주자 있을 때
                        log.setLog2ndBase(null); // 2루 비우고
                        run++;
                        eventSB.append("2루 주자 ").append(base2Name).append(" 득점\n");
                    }
                    if (log1stBase != null) { // 1루 주자 있을 때
                        log.setLog3rdBase(log1stBase); // 1루 주자 3루로 이동
                        log.setLog1stBase(null); //1루 비우고
                        eventSB.append("1루 주자 ").append(base1Name).append(" 3루까지 진루\n");
                    }
                    log.setLog2ndBase(hitterSeq); // 타자 2루 이동
                    isEnd = true;
                    break;
                case TRIPLE:
                    description = count + "구 타격 : 3루타";
                    // 3루 주자 있으면
                    if (log3rdBase != null) {
                        // 3루 비우고
                        log.setLog3rdBase(null);
                        run++;
                        eventSB.append("3루 주자 ").append(base3Name).append(" 득점\n");
                    }
                    // 2루 주자 있으면
                    if (log2ndBase != null) {
                        // 2루 비우고
                        log.setLog2ndBase(null);
                        run++;
                        eventSB.append("2루 주자 ").append(base2Name).append(" 득점\n");
                    }
                    // 1루 주자 있으면
                    if (log1stBase != null) {
                        // 1루 비우고
                        log.setLog1stBase(null);
                        run++;
                        eventSB.append("1루 주자 ").append(base1Name).append(" 득점\n");
                    }
                    // 타자 3루 이동
                    log.setLog3rdBase(hitterSeq);
                    isEnd = true;
                    break;
                case HOMERUN:
                    description = count + "구 타격 : 홈런";
                    // 3루 주자 있으면
                    if (log3rdBase != null) {
                        // 3루 비우고
                        log.setLog3rdBase(null);
                        run++;
                        eventSB.append("3루 주자 ").append(base3Name).append(" 득점\n");
                    }
                    // 2루 주자 있으면
                    if (log2ndBase != null) {
                        // 2루 비우고
                        log.setLog2ndBase(null);
                        run++;
                        eventSB.append("2루 주자 ").append(base2Name).append(" 득점\n");
                    }
                    // 1루 주자 있으면
                    if (log1stBase != null) {
                        // 1루 비우고
                        log.setLog1stBase(null);
                        run++;
                        eventSB.append("1루 주자 ").append(base1Name).append(" 득점\n");
                    }
                    eventSB.append("타자 ").append(hitterName).append(" 득점\n");
                    run++;
                    isEnd = true;
                    break;
                case GROUNDOUT:
                    if (log1stBase == null || out == 2) { // 1루에 주자가 없거나 2아웃일 때: 타자 혼자 아웃
                        description = count + "구 타격 : 땅볼";
                        // 타자 아웃
                        out++;
                        eventSB.append("타자 ").append(hitterName).append(" 1루 포스아웃\n");
                        if (out != 3) { // 3아웃이면 이닝 종료로 득점 및 진루 불가
                            // 3루에 주자가 있을 때
                            if (log3rdBase != null) {
                                // 3루 비우고
                                log.setLog3rdBase(null);
                                run++;
                                eventSB.append("3루 주자 ").append(base3Name).append(" 득점\n");
                            }
                            // 2루에 주자가 있을 때
                            if (log2ndBase != null) {
                                // 2루 비우고
                                log.setLog2ndBase(null);
                                // 2루 주자 3루 이동
                                log.setLog3rdBase(log2ndBase);
                                eventSB.append("2루 주자 ").append(base2Name).append(" 3루까지 진루\n");
                            }
                        }
                    }
                    else { // 1루에 주자가 있고, 2아웃이 아닐 때: 병살타
                        if (log2ndBase != null && out == 0) {
                            description = count + "구 타격 : 삼중살타\n";
                            out++; // 2루 주자 아웃
                            eventSB.append("2루 주자 ").append(base2Name).append(" 3루 포스아웃\n");
                            out++; // 1루 주자 아웃
                            eventSB.append("1루 주자 ").append(base1Name).append(" 2루 포스아웃\n");
                            out++; // 타자 아웃
                            eventSB.append("타자 ").append(hitterName).append(" 1루 포스아웃\n");

                            isEnd = true;
                            break;
                        }
                        description = count + "구 타격 : 병살타";
                        out++; // 1루 주자 아웃
                        eventSB.append("1루 주자 ").append(base1Name).append(" 2루 포스아웃\n");
                        out++; // 타자 아웃
                        eventSB.append("타자 ").append(hitterName).append(" 1루 포스아웃\n");
                        if (out != 3) { // 3아웃이면 이닝 종료로 득점 및 진루 불가
                            if (log3rdBase != null) {
                                // 3루 비우고
                                log.setLog3rdBase(null);
                                run++;
                                eventSB.append("3루 주자 ").append(base3Name).append(" 득점\n");
                            }
                        }
                    }
                    isEnd = true;
                    break;
                case FLYOUT:
                    // 3루에 주자가 있고, 2아웃이 아닐 때
                    if (log3rdBase != null && out != 2) {
                        description = count + "구 타격 : 희생플라이";
                        eventSB.append(count).append("구 타격 : 희생플라이\n");
                        out++; // 타자 아웃
                        eventSB.append("타자 ").append(hitterName).append(" 뜬공 아웃\n");
                        log.setLog3rdBase(null); // 3루 비우고
                        run++;
                        eventSB.append("3루 주자 ").append(base3Name).append(" 득점\n");
                    }
                    // 그 외
                    else {
                        description = count + "구 타격 : 뜬공";
                        eventSB.append(count).append("구 타격 : 뜬공\n");
                        // 타자 아웃
                        eventSB.append("타자 ").append(hitterName).append(" 뜬공 아웃\n");
                        out++;
                    }
                    isEnd = true;
                    break;
                case FOUL:
                    description = count + "구 타격 : 파울";
                    strike = Math.min(strike + 1, 2);
                    break;
                case SWING:
                    description = count + "구 헛스윙";
                    strike++;
                    // 3스트면 아웃
                    if (strike == 3) {
                        if (half.equals("Top")) {
                            scoreboard.setScoreboardAwayStrikeout(scoreboard.getScoreboardAwayStrikeout() + 1);
                        } else {
                            scoreboard.setScoreboardHomeStrikeout(scoreboard.getScoreboardHomeStrikeout() + 1);
                        }
                        eventSB.append("타자 ").append(hitterName).append(" 헛스윙 삼진 아웃\n");
                        out++;
                        isEnd = true;
                    }
                    break;
                case BALL:
                    if (half.equals("Top")) {
                        scoreboard.setScoreboardAwayWalk(scoreboard.getScoreboardAwayWalk() + 1);
                    } else {
                        scoreboard.setScoreboardHomeWalk(scoreboard.getScoreboardHomeWalk() + 1);
                    }
                    description = count + "구 볼";
                    ball++;
                    // 볼넷이면
                    if (ball == 4) {
                        if (log1stBase != null) { // 1루 주자가 있으면
                            if (log2ndBase != null) { // 2루 주자가 있으면
                                if (log3rdBase != null) { // 3루 주자가 있으면
                                    run++;
                                    eventSB.append("3루 주자 ").append(base3Name).append(" 득점\n");
                                }
                                log.setLog3rdBase(log2ndBase); // 2루 주자 3루 이동
                                eventSB.append("2루 주자 ").append(base1Name).append(" 3루까지 진루\n");
                            }
                            log.setLog2ndBase(log1stBase); // 1루 주자 2루 이동
                            eventSB.append("1루 주자 ").append(base1Name).append(" 2루까지 진루\n");
                        }
                        log.setLog1stBase(hitterSeq); // 타자 1루 이동
                        eventSB.append("타자 ").append(hitterName).append(" 볼넷으로 출루\n");
                        isEnd = true;
                    }
                    break;
                case STRIKE:
                    description = count + "구 스트라이크";
                    strike++;
                    // 3스트면 아웃
                    if (strike == 3) {
                        if (half.equals("Top")) {
                            scoreboard.setScoreboardAwayStrikeout(scoreboard.getScoreboardAwayStrikeout() + 1);
                        } else {
                            scoreboard.setScoreboardHomeStrikeout(scoreboard.getScoreboardHomeStrikeout() + 1);
                        }
                        out++;
                        eventSB.append("타자 ").append(hitterName).append(" 루킹 삼진 아웃\n");
                        isEnd = true;
                    }
                    break;
            }

            pitch.setBall(ball);
            pitch.setStrike(strike);
            pitch.setPitchType(pitchType);
            pitch.setVelocity(velocity);
            pitch.setBallX(ballX);
            pitch.setBallY(ballY);
            pitch.setZone(zone);
            pitch.setDescription(description);
            fullSB.append(description);

            pitches.add(pitch);
        }
        fullSB.append(eventSB);

        // 경기 기록 추가
        if (half.equals("Top")) {
            switch (inning) {
                case 1:
                    descriptions.setDescription1stTop(descriptions.getDescription1stTop() + "\n" + fullSB.toString());
                    break;
                case 2:
                    descriptions.setDescription2ndTop(descriptions.getDescription2ndTop() + "\n" + fullSB.toString());
                    break;
                case 3:
                    descriptions.setDescription3rdTop(descriptions.getDescription3rdTop() + "\n" + fullSB.toString());
                    break;
                case 4:
                    descriptions.setDescription4thTop(descriptions.getDescription4thTop() + "\n" + fullSB.toString());
                    break;
                case 5:
                    descriptions.setDescription5thTop(descriptions.getDescription5thTop() + "\n" + fullSB.toString());
                    break;
                case 6:
                    descriptions.setDescription6thTop(descriptions.getDescription6thTop() + "\n" + fullSB.toString());
                    break;
                case 7:
                    descriptions.setDescription7thTop(descriptions.getDescription7thTop() + "\n" + fullSB.toString());
                    break;
                case 8:
                    descriptions.setDescription8thTop(descriptions.getDescription8thTop() + "\n" + fullSB.toString());
                    break;
                case 9:
                    descriptions.setDescription9thTop(descriptions.getDescription9thTop() + "\n" + fullSB.toString());
                    break;
            }
        } else {
            switch (inning) {
                case 1:
                    descriptions.setDescription1stBottom(descriptions.getDescription1stBottom() + "\n" + fullSB.toString());
                    break;
                case 2:
                    descriptions.setDescription2ndBottom(descriptions.getDescription2ndBottom() + "\n" + fullSB.toString());
                    break;
                case 3:
                    descriptions.setDescription3rdBottom(descriptions.getDescription3rdBottom() + "\n" + fullSB.toString());
                    break;
                case 4:
                    descriptions.setDescription4thBottom(descriptions.getDescription4thBottom() + "\n" + fullSB.toString());
                    break;
                case 5:
                    descriptions.setDescription5thBottom(descriptions.getDescription5thBottom() + "\n" + fullSB.toString());
                    break;
                case 6:
                    descriptions.setDescription6thBottom(descriptions.getDescription6thBottom() + "\n" + fullSB.toString());
                    break;
                case 7:
                    descriptions.setDescription7thBottom(descriptions.getDescription7thBottom() + "\n" + fullSB.toString());
                    break;
                case 8:
                    descriptions.setDescription8thBottom(descriptions.getDescription8thBottom() + "\n" + fullSB.toString());
                    break;
                case 9:
                    descriptions.setDescription9thBottom(descriptions.getDescription9thBottom() + "\n" + fullSB.toString());
                    break;
            }
        }

        // 점수 발생 시 반영
        if (run != 0) {
            if (half.equals("Top")) {
                scoreboard.setScoreboardAwayScore(scoreboard.getScoreboardAwayScore() + run);
                switch (inning) {
                    case 1:
                        scoreboard.setScoreboard1stTop(scoreboard.getScoreboard1stTop() + run);
                        break;
                    case 2:
                        scoreboard.setScoreboard2ndTop(scoreboard.getScoreboard2ndTop() + run);
                        break;
                    case 3:
                        scoreboard.setScoreboard3rdTop(scoreboard.getScoreboard3rdTop() + run);
                        break;
                    case 4:
                        scoreboard.setScoreboard4thTop(scoreboard.getScoreboard4thTop() + run);
                        break;
                    case 5:
                        scoreboard.setScoreboard5thTop(scoreboard.getScoreboard5thTop() + run);
                        break;
                    case 6:
                        scoreboard.setScoreboard6thTop(scoreboard.getScoreboard6thTop() + run);
                        break;
                    case 7:
                        scoreboard.setScoreboard7thTop(scoreboard.getScoreboard7thTop() + run);
                        break;
                    case 8:
                        scoreboard.setScoreboard8thTop(scoreboard.getScoreboard8thTop() + run);
                        break;
                    case 9:
                        scoreboard.setScoreboard9thTop(scoreboard.getScoreboard9thTop() + run);
                        break;
                }
            } else {
                scoreboard.setScoreboardHomeScore(scoreboard.getScoreboardAwayScore() + run);
                switch (inning) {
                    case 1:
                        scoreboard.setScoreboard1stBottom(scoreboard.getScoreboard1stBottom() + run);
                        break;
                    case 2:
                        scoreboard.setScoreboard2ndBottom(scoreboard.getScoreboard2ndBottom() + run);
                        break;
                    case 3:
                        scoreboard.setScoreboard3rdBottom(scoreboard.getScoreboard3rdBottom() + run);
                        break;
                    case 4:
                        scoreboard.setScoreboard4thBottom(scoreboard.getScoreboard4thBottom() + run);
                        break;
                    case 5:
                        scoreboard.setScoreboard5thBottom(scoreboard.getScoreboard5thBottom() + run);
                        break;
                    case 6:
                        scoreboard.setScoreboard6thBottom(scoreboard.getScoreboard6thBottom() + run);
                        break;
                    case 7:
                        scoreboard.setScoreboard7thBottom(scoreboard.getScoreboard7thBottom() + run);
                        break;
                    case 8:
                        scoreboard.setScoreboard8thBottom(scoreboard.getScoreboard8thBottom() + run);
                        break;
                    case 9:
                        scoreboard.setScoreboard9thBottom(scoreboard.getScoreboard9thBottom() + run);
                        break;
                }
            }
        }

        // 3아웃 시 이닝 교대
        if (out == 3) {
            if (half.equals("Bottom")) {
                inning++;
                if (inning > 9) inning = -1;
                half = "Top";
            } else {
                half = "Bottom";
            }
        }

        // 9회 말이 되었거나 진행중일 때 홈팀 점수가 앞서면 경기 종료 (끝내기 룰)
        if (inning == 9 && half.equals("Bottom")) {
            if (scoreboard.getScoreboardHomeScore() > scoreboard.getScoreboardAwayScore()) inning = -1;
        }

        // 다음 타자로 넘기고, 경기 진행 및 설정에 타자 갱신
        nextBat = (nextBat + 1) % 9;
        switch (nextBat) {
            case 1:
                hitterSeq = setting.getMatchSetting1st().getHitterSeq();
                break;
            case 2:
                hitterSeq = setting.getMatchSetting2nd().getHitterSeq();
                break;
            case 3:
                hitterSeq = setting.getMatchSetting3rd().getHitterSeq();
                break;
            case 4:
                hitterSeq = setting.getMatchSetting4th().getHitterSeq();
                break;
            case 5:
                hitterSeq = setting.getMatchSetting5th().getHitterSeq();
                break;
            case 6:
                hitterSeq = setting.getMatchSetting6th().getHitterSeq();
                break;
            case 7:
                hitterSeq = setting.getMatchSetting7th().getHitterSeq();
                break;
            case 8:
                hitterSeq = setting.getMatchSetting8th().getHitterSeq();
                break;
            case 0:
                hitterSeq = setting.getMatchSetting9th().getHitterSeq();
                break;
        }
        setting.setMatchSettingNextBat(nextBat);
        log.setLogHitter(hitterSeq);
        matchSettingRepository.save(setting);
        logRepository.save(log);

        // 반환값 만들기
        Map<String, Object> resultMap = new HashMap<>();

        resultMap.put("inning", inning);
        resultMap.put("half", half);
        resultMap.put("out", out);
        resultMap.put("pitches", pitches);
        resultMap.put("pitcherName", pitcherName);
        resultMap.put("pitcherSeq", pitcherSeq);
        resultMap.put("hitterName", hitterName);
        resultMap.put("hitterSeq", hitterSeq);
        if (log1stBase != null) {
            resultMap.put("1stBaseSeq", log1stBase);
            resultMap.put("1stBaseName", hitterRepository.findByHitterSeq(log1stBase));
        }
        if (log2ndBase != null) {
            resultMap.put("2ndBaseSeq", log2ndBase);
            resultMap.put("2ndBaseName", hitterRepository.findByHitterSeq(log2ndBase));
        }
        if (log3rdBase != null) {
            resultMap.put("3rdBaseSeq", log3rdBase);
            resultMap.put("3rdBaseName", hitterRepository.findByHitterSeq(log3rdBase));
        }
        resultMap.put("scoreboard", scoreboard);

        return resultMap;
    }

    @Transactional
    public Map<String, List<?>> changePlayer() throws Exception {
        Map<String, List<?>> map = new HashMap<>();

        Optional<User> byUserUid = userRepository.findByUserUid(jwtService.getUserUid(jwtService.getJwt()));

        if(byUserUid.isPresent()){
            List<ChangePitcherResDto> pitcherList = new ArrayList<>();
            List<ChangeHitterResDto> hitterList = new ArrayList<>();

            List<UserPitcher> userPitcher = managePitcherRepository.findAllByUserSeq(byUserUid.get());
            List<UserHitter> userHitter = manageHitterRepository.findAllByUserSeq(byUserUid.get());

            for(UserPitcher u : userPitcher){
                Pitcher byPitcherSeq = pitcherRepository.findByPitcherSeq(u.getPitcherSeq());
                ChangePitcherResDto changePitcherResDto = new ChangePitcherResDto();
                changePitcherResDto.setPitcherSeq(u.getPitcherSeq());
                changePitcherResDto.setName(u.getUserPitcherName());
                changePitcherResDto.setPitArm(byPitcherSeq.getPitArm());
                changePitcherResDto.setEra(byPitcherSeq.getEra());
                pitcherList.add(changePitcherResDto);
            }
            map.put("pitcher", pitcherList);

            for(UserHitter u : userHitter) {
                Hitter byHitterSeq = hitterRepository.findByHitterSeq(u.getHitterSeq());
                ChangeHitterResDto changeHitterResDto = new ChangeHitterResDto();
                changeHitterResDto.setHitterSeq(u.getHitterSeq());
                changeHitterResDto.setName(u.getUserHitterName());
                changeHitterResDto.setBatArm(byHitterSeq.getBatArm());
                changeHitterResDto.setAvg(byHitterSeq.getAvg());
                hitterList.add(changeHitterResDto);
            }
            map.put("hitter", hitterList);
            return map;
        }
        else return null;
    }
    
    public LineupResDto getLineup(String uid,Long matchSeq) {
        LineupResDto l = new LineupResDto();
        Optional<Match> o = matchRepository.findByMatchSeq(matchSeq);
        //match가 존재한다면
        if(o.isPresent()) {
            User u = userRepository.findByUserUid(uid).get();
            Match m = o.get();
            AITeam aiteam = aiTeamRepository.findByAiTeamSeq(m.getAiTeamSeq());
            AISetting aisetting = aiSettingRepository.findByAiTeamSeq(aiteam.getAiTeamSeq()).get();
            MatchSetting matchSetting = matchSettingRepository.findByMatchSeq(m.getMatchSeq()).get();

            Log log = logRepository.findByMatchSeq(m.getMatchSeq());

            OrderResDto aiorder = new OrderResDto();
            OrderResDto order = new OrderResDto();
            aiorder.setTeamLogoUrl(aiteam.getLogoSeq().getLogoUrl());
            aiorder.setTeamName(aiteam.getAiTeamName());
            aiorder.setHitter1st(aisetting.getAiSetting1st());
            aiorder.setHitter2nd(aisetting.getAiSetting2nd());
            aiorder.setHitter3rd(aisetting.getAiSetting3rd());
            aiorder.setHitter4th(aisetting.getAiSetting4th());
            aiorder.setHitter5th(aisetting.getAiSetting5th());
            aiorder.setHitter6th(aisetting.getAiSetting6th());
            aiorder.setHitter7th(aisetting.getAiSetting7th());
            aiorder.setHitter8th(aisetting.getAiSetting8th());
            aiorder.setHitter9th(aisetting.getAiSetting9th());
            switch(aisetting.getAiSettingPitcher()) {
            case 5:
                aiorder.setPitcher(aisetting.getAiSettingsp5());
                break;
            case 4:
                aiorder.setPitcher(aisetting.getAiSettingsp4());
                break;
            case 3:
                aiorder.setPitcher(aisetting.getAiSettingsp3());
                break;
            case 2:
                aiorder.setPitcher(aisetting.getAiSettingsp2());
                break;
            case 1:
            default:
                aiorder.setPitcher(aisetting.getAiSettingsp1());
                break;
            }
            
            order.setTeamLogoUrl(u.getLogo().getLogoUrl());
            order.setTeamName(u.getUserTeamname());
            order.setHitter1st(hitterRepository.findByHitterSeq(matchSetting.getMatchSetting1st().getHitterSeq()));
            order.setHitter2nd(hitterRepository.findByHitterSeq(matchSetting.getMatchSetting2nd().getHitterSeq()));
            order.setHitter3rd(hitterRepository.findByHitterSeq(matchSetting.getMatchSetting3rd().getHitterSeq()));
            order.setHitter4th(hitterRepository.findByHitterSeq(matchSetting.getMatchSetting4th().getHitterSeq()));
            order.setHitter5th(hitterRepository.findByHitterSeq(matchSetting.getMatchSetting5th().getHitterSeq()));
            order.setHitter6th(hitterRepository.findByHitterSeq(matchSetting.getMatchSetting6th().getHitterSeq()));
            order.setHitter7th(hitterRepository.findByHitterSeq(matchSetting.getMatchSetting7th().getHitterSeq()));
            order.setHitter8th(hitterRepository.findByHitterSeq(matchSetting.getMatchSetting8th().getHitterSeq()));
            order.setHitter9th(hitterRepository.findByHitterSeq(matchSetting.getMatchSetting9th().getHitterSeq()));
            order.setPitcher(pitcherRepository.findByPitcherSeq(matchSetting.getMatchSettingPitcher().getPitcherSeq()));
        
            if(m.getMatchHomeFlag()) {
                l.setHome(order);
                l.setAway(aiorder);
                log.setLogHitter(aiorder.getHitter1st().getHitterSeq());
            }else {
                l.setHome(aiorder);
                l.setAway(order);
                log.setLogHitter(order.getHitter1st().getHitterSeq());
            }
        }
        return l;
        
    }

    public ScoreResultResDto getResult(String uid, Long matchSeq) {
        ScoreResultResDto s = new ScoreResultResDto();
        Optional<Match> o = matchRepository.findByMatchSeq(matchSeq);
        if (o.isPresent()) {
            User u = userRepository.findByUserUid(uid).get();
            Match m = o.get();
            AITeam aiteam = aiTeamRepository.findByAiTeamSeq(m.getAiTeamSeq());
            Scoreboard scoreboard = scoreboardRepository.findByMatchSeq(matchSeq);
            if (scoreboard != null) {
                // 홈팀이 유저팀이고 어웨이가 ai팀일때
                if (m.getMatchHomeFlag()) {
                    s.setHomeTeamName(u.getUserTeamname());
                    s.setHomeTeamLogoUrl(u.getLogo().getLogoUrl());
                    s.setAwayTeamName(aiteam.getAiTeamName());
                    s.setAwayTeamLogoUrl(aiteam.getLogoSeq().getLogoUrl());
                } else {
                    s.setAwayTeamName(u.getUserTeamname());
                    s.setAwayTeamLogoUrl(u.getLogo().getLogoUrl());
                    s.setHomeTeamName(aiteam.getAiTeamName());
                    s.setHomeTeamLogoUrl(aiteam.getLogoSeq().getLogoUrl());
                }
                s.setScoreboard1stTop(scoreboard.getScoreboard1stTop());
                s.setScoreboard2ndTop(scoreboard.getScoreboard2ndTop());
                s.setScoreboard3rdTop(scoreboard.getScoreboard3rdTop());
                s.setScoreboard4thTop(scoreboard.getScoreboard4thTop());
                s.setScoreboard5thTop(scoreboard.getScoreboard5thTop());
                s.setScoreboard6thTop(scoreboard.getScoreboard6thTop());
                s.setScoreboard7thTop(scoreboard.getScoreboard7thTop());
                s.setScoreboard8thTop(scoreboard.getScoreboard8thTop());
                s.setScoreboard9thTop(scoreboard.getScoreboard9thTop());
                s.setScoreboardAwayScore(scoreboard.getScoreboardAwayScore());
                s.setScoreboardAwayHit(scoreboard.getScoreboardAwayHit());
                s.setScoreboardAwayWalk(scoreboard.getScoreboardAwayWalk());
                s.setScoreboardAwayHomerun(scoreboard.getScoreboardAwayHomerun());
                s.setScoreboardAwayStrikeout(scoreboard.getScoreboardAwayStrikeout());

                s.setScoreboard1stBottom(scoreboard.getScoreboard1stBottom());
                s.setScoreboard2ndBottom(scoreboard.getScoreboard2ndBottom());
                s.setScoreboard3rdBottom(scoreboard.getScoreboard3rdBottom());
                s.setScoreboard4thBottom(scoreboard.getScoreboard4thBottom());
                s.setScoreboard5thBottom(scoreboard.getScoreboard5thBottom());
                s.setScoreboard6thBottom(scoreboard.getScoreboard6thBottom());
                s.setScoreboard7thBottom(scoreboard.getScoreboard7thBottom());
                s.setScoreboard8thBottom(scoreboard.getScoreboard8thBottom());
                s.setScoreboard9thBottom(scoreboard.getScoreboard9thBottom());
                s.setScoreboardHomeScore(scoreboard.getScoreboardHomeScore());
                s.setScoreboardHomeHit(scoreboard.getScoreboardHomeHit());
                s.setScoreboardHomeWalk(scoreboard.getScoreboardHomeWalk());
                s.setScoreboardHomeHomerun(scoreboard.getScoreboardHomeHomerun());
                s.setScoreboardHomeStrikeout(scoreboard.getScoreboardHomeStrikeout());
            }
            Season seasonSeq = m.getSeasonSeq();
            Schedule schedule = scheduleRepository.findByScheduleSeq(seasonSeq.getScheduleSeq().getScheduleSeq());

            if(schedule.getScheduleSeq() % 16 == 0){
                seasonSeq.setSeasonSeq(seasonSeq.getSeasonSeq()+1);
            } else {
                seasonSeq.setScheduleSeq(scheduleRepository.findByScheduleSeq(seasonSeq.getScheduleSeq().getScheduleSeq() + 1));
            }
            Match ma = new Match();
            matchRepository.save(ma.builder()
                    .userSeq(u)
                    .seasonSeq(seasonSeq)
                    .aiTeamSeq(aiTeamRepository.findByAiTeamSeq(seasonSeq.getScheduleSeq().getTeamSeq().getAiTeamSeq()).getAiTeamSeq())
                    .matchHomeFlag(seasonSeq.getScheduleSeq().getScheduleHomeFlag())
                    .build());
        }

        return s;
    }

    public List<Map<String, Object>> getLogs(String uid) {
        long matchSeq = matchRepository.findTop1ByUserSeq_UserUidOrderByMatchSeq(uid).getMatchSeq();
        Description description = descriptionRepository.findByMatch_MatchSeq(matchSeq);

        List<Map<String, Object>> resultList = new LinkedList<>();
        for (int inning = 1; inning <= 9; inning++) {
            for (int half = 0; half <= 1; half++) {
                Map<String, Object> map = new HashMap<>();
                map.put("inning", inning);
                map.put("half", half == 0 ? "초" : "말");
                String des = null;
                if (half == 0) {
                    switch (inning) {
                        case 1:
                            des = description.getDescription1stTop();
                            break;
                        case 2:
                            des = description.getDescription2ndTop();
                            break;
                        case 3:
                            des = description.getDescription3rdTop();
                            break;
                        case 4:
                            des = description.getDescription4thTop();
                            break;
                        case 5:
                            des = description.getDescription5thTop();
                            break;
                        case 6:
                            des = description.getDescription6thTop();
                            break;
                        case 7:
                            des = description.getDescription7thTop();
                            break;
                        case 8:
                            des = description.getDescription8thTop();
                            break;
                        case 9:
                            des = description.getDescription9thTop();
                            break;
                    }
                } else {
                    switch (inning) {
                        case 1:
                            des = description.getDescription1stBottom();
                            break;
                        case 2:
                            des = description.getDescription2ndBottom();
                            break;
                        case 3:
                            des = description.getDescription3rdBottom();
                            break;
                        case 4:
                            des = description.getDescription4thBottom();
                            break;
                        case 5:
                            des = description.getDescription5thBottom();
                            break;
                        case 6:
                            des = description.getDescription6thBottom();
                            break;
                        case 7:
                            des = description.getDescription7thBottom();
                            break;
                        case 8:
                            des = description.getDescription8thBottom();
                            break;
                        case 9:
                            des = description.getDescription9thBottom();
                            break;
                    }
                }
                map.put("description", des);
                resultList.add(map);
            }
        }

        return resultList;
    }

    public boolean changePitcher(String uid, long pitcherSeq) {
        Match match = matchRepository.findTop1ByUserSeq_UserUidOrderByMatchSeq(uid);
        long matchSeq = match.getMatchSeq();
        long userSeq = match.getUserSeq().getUserSeq();

        if (!matchSettingRepository.findByMatchSeq(matchSeq).isPresent()) {
            return false;
        }
        MatchSetting setting = matchSettingRepository.findByMatchSeq(matchSeq).get();

        UserPitcher outPitcher = setting.getMatchSettingPitcher();
        long outPitcherSeq = outPitcher.getPitcherSeq();
        OutPlayer outPlayer = OutPlayer.builder()
                .matchSeq(match)
                .outPlayerPlayerSeq(outPitcherSeq)
                .outPlayerType('P')
                .build();

        outPlayerRepository.save(outPlayer);

        if (userPitcherRepository.findByUserSeq_UserSeqAndPitcherSeq(userSeq, pitcherSeq).isPresent()) {
            return false;
        }
        UserPitcher newPitcher = userPitcherRepository.findByUserSeq_UserSeqAndPitcherSeq(userSeq, pitcherSeq).get();
        setting.setMatchSettingPitcher(newPitcher);
        return true;
    }

    public boolean changeHitter(String uid, long hitterSeq, int battingOrder) {
        Match match = matchRepository.findTop1ByUserSeq_UserUidOrderByMatchSeq(uid);
        long matchSeq = match.getMatchSeq();
        long userSeq = match.getUserSeq().getUserSeq();

        if (!matchSettingRepository.findByMatchSeq(matchSeq).isPresent()) {
            return false;
        }
        MatchSetting setting = matchSettingRepository.findByMatchSeq(matchSeq).get();

        UserHitter outHitter = null;
        switch (battingOrder) {
            case 1:
                outHitter = setting.getMatchSetting1st();
                break;
            case 2:
                outHitter = setting.getMatchSetting2nd();
                break;
            case 3:
                outHitter = setting.getMatchSetting3rd();
                break;
            case 4:
                outHitter = setting.getMatchSetting4th();
                break;
            case 5:
                outHitter = setting.getMatchSetting5th();
                break;
            case 6:
                outHitter = setting.getMatchSetting6th();
                break;
            case 7:
                outHitter = setting.getMatchSetting7th();
                break;
            case 8:
                outHitter = setting.getMatchSetting8th();
                break;
            case 9:
                outHitter = setting.getMatchSetting9th();
                break;
        }
        if (outHitter == null) {
            return false;
        }
        long outHitterSeq = outHitter.getHitterSeq();
        OutPlayer outPlayer = OutPlayer.builder()
                .matchSeq(match)
                .outPlayerPlayerSeq(outHitterSeq)
                .outPlayerType('P')
                .build();

        outPlayerRepository.save(outPlayer);

        if (userHitterRepository.findByUserSeq_UserSeqAndHitterSeq(userSeq, hitterSeq).isPresent()) {
            return false;
        }
        UserHitter newHitter = userHitterRepository.findByUserSeq_UserSeqAndHitterSeq(userSeq, hitterSeq).get();

        switch (battingOrder) {
            case 1:
                setting.setMatchSetting1st(newHitter);
                break;
            case 2:
                setting.setMatchSetting2nd(newHitter);
                break;
            case 3:
                setting.setMatchSetting3rd(newHitter);
                break;
            case 4:
                setting.setMatchSetting4th(newHitter);
                break;
            case 5:
                setting.setMatchSetting5th(newHitter);
                break;
            case 6:
                setting.setMatchSetting6th(newHitter);
                break;
            case 7:
                setting.setMatchSetting7th(newHitter);
                break;
            case 8:
                setting.setMatchSetting8th(newHitter);
                break;
            case 9:
                setting.setMatchSetting9th(newHitter);
                break;
        }

        return true;
    }
}
