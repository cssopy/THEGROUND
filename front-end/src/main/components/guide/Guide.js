import { Col, Row } from "react-bootstrap";
import { useDispatch } from "react-redux/es/exports";
import { configActions } from "../../../redux/slice/configSlice";

import ManageGuide from "../../../assets/etc/manage_guide.png";
import MarketGuide from "../../../assets/etc/market_guide.png";

import style from "../../css/guide/Guide.module.css";

const Guide = () => {
  const dispatch = useDispatch();

  return (
    <>
      <Row
        className={style["background"]}
        onContextMenu={(e) => {
          e.preventDefault();
        }}
      >
        <div style={{ marginTop: "auto", marginBottom: "auto" }}>
          <Row className={style["mainHead"]}>
            <div
              className={style["mainHead-menu"]}
              onClick={() => {
                dispatch(configActions.setUrl("main"));
              }}
            >
              PvE
            </div>
            <div
              className={style["mainHead-menu"]}
              onClick={() => {
                alert("차후 업데이트 예정");
              }}
            >
              PvP
            </div>
            <div
              className={style["mainHead-menu"]}
              onClick={() => {
                dispatch(configActions.setUrl("manage"));
              }}
            >
              구단관리
            </div>
            <div
              className={style["mainHead-menu"]}
              onClick={() => {
                dispatch(configActions.setUrl("market"));
              }}
            >
              이적시장
            </div>
            <div
              style={{ background: "rgba(5, 20, 48, 0.5)" }}
              className={style["mainHead-menu"]}
              onClick={() => {
                alert("차후 업데이트 예정");
              }}
            >
              가이드
            </div>
          </Row>
          <Row className={style["mainBody"]}>
            <Row>
              <Col>
                <Row className={style["manageHead"]}>
                  <div>구단 관리</div>
                </Row>
                <Row className={style["manageBody"]}>
                  <img
                    className={style["guideImg"]}
                    src={ManageGuide}
                    alt="manageguide"
                  ></img>
                  <div className={style["guideContent"]}>
                    <ol>
                      <li>
                        사용자는 구단 관리 페이지에서 <span>1번 영역</span>에서
                        자신의 보유 타자와 <span>2번, 3번 영역</span>에서
                        구원투수, 선발 로테이션 현황을 확인할 수 있습니다.
                      </li>
                      <li>
                        사용자는 2번, 3번 영역의 선수들을 각각의 반대 영역에
                        마우스 왼쪽 클릭을 통해 이동할 수 있습니다.
                      </li>
                      <li>
                        또는 마우스 오른쪽 클릭을 통해 빠르게 이동할 수
                        있습니다.
                      </li>
                      <li>
                        2번 영역 내에서도 마우스 왼쪽 클릭으로 드래그를 통해
                        선수들의 순서를 변경할 수 있습니다.
                      </li>
                      <li>
                        4번 영역의 'MAIN' 버튼을 활성화하면 메인 페이지로
                        이동합니다.
                      </li>
                      <li>
                        4번 영역의 '이적시장' 버튼을 활성화하면 이적시장
                        페이지로 이동합니다.
                      </li>
                      <li>
                        4번 영역의 'RESET' 버튼을 활성화하면 사용자가 'SAVE'
                        버튼을 활성화하기 전의 상태로 되돌립니다.
                      </li>
                      <li>
                        4번 영역의 'SAVE' 버튼을 활성화하면 사용자가 변경한 현재
                        상태를 저장합니다.
                      </li>
                    </ol>
                  </div>
                </Row>
              </Col>
              <Col>
                <Row className={style["marketHead"]}>
                  <div>이적 시장</div>
                </Row>
                <Row className={style["marketBody"]}>
                  <img
                    className={style["guideImg"]}
                    src={MarketGuide}
                    alt="manageguide"
                  ></img>
                  <div className={style["guideContent"]}>
                    <ol>
                      <li>
                        사용자는 이적 시장 페이지에서 1번 영역에서 게임의 전체
                        타자와 투수, 3번 영역에서 자신의 예산 한도와 현재 사용
                        가능한 예산의 양, 4번 영역에서 자신의 보유 타자, 투수를
                        확인할 수 있습니다.
                      </li>
                      <li>
                        사용자는 2번 영역의 탭을 선택하여 타자, 투수 정보를
                        전환할 수 있습니다.
                      </li>
                      <li>
                        사용자는 3번 영역에서 자신 레벨의 예산 한도와 보유
                        선수의 연봉을 제외한 사용 가능 예산을 확인할 수
                        있습니다.
                      </li>
                      <li>
                        사용자는 4번 영역에서 자신이 보유한 타자와 투수를 확인할
                        수 있습니다.
                      </li>
                      <li>
                        사용자는 1번, 4번 영역의 선수들을 각각의 반대 영역에
                        마우스 왼쪽 클릭으로 드래그를 통해 이동할 수 있습니다.
                      </li>
                      <li>
                        5번 영역의 'MAIN' 버튼을 활성화하면 메인 페이지로
                        이동합니다.
                      </li>
                      <li>
                        5번 영역의 '구단관리' 버튼을 활성화하면 구단관리
                        페이지로 이동합니다.
                      </li>
                      <li>
                        5번 영역의 'RESET' 버튼을 활성화하면 사용자가 'SAVE'
                        버튼을 활성화하기 전의 상태로 되돌립니다.
                      </li>
                      <li>
                        5번 영역의 'SAVE' 버튼을 활성화하면 사용자가 변경한 현재
                        상태를 저장합니다.
                      </li>
                    </ol>
                  </div>
                </Row>
              </Col>
            </Row>
          </Row>
        </div>
      </Row>
    </>
  );
};

export default Guide;
