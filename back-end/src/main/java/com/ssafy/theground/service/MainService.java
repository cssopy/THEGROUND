package com.ssafy.theground.service;

import com.ssafy.theground.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class MainService {

    private final UserRepository userRepository;

    private final JwtService jwtService;

//    public List<MatchResDto> getSchedules() throws Exception {
//        Optional<User> byUserUid = userRepository.findByUserUid(jwtService.getUserUid(jwtService.getJwt()));
//
//        if(byUserUid.isPresent()){
//            Season byUserSeq = seasonRepository.findByUserSeq(byUserUid.get().getUserSeq());
//        }
//
//    }
}
