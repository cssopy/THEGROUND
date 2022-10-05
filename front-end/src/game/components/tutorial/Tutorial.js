import styles from "../../css/tutorial/Tutorial.module.css";
import { Row, Col } from "react-bootstrap";
import { useEffect, useState } from "react";

const Tutorial = (props) => {
  const { closeTutorial } = props;
  const [orders, setOrders] = useState(1);

  useEffect(() => {
    if (orders % 4) {
      setTimeout(() => setOrders((prev) => prev + 1), 500);
      console.log(orders);
    }
  });

  const nextOrder = () => {
    setOrders((prev) => prev + 1);
  };
  const skipTuto = () => {
    setOrders(1000);
    setTimeout(() => closeTutorial(), 1000);
  };
  const changePrev = () => {
    if (orders > 8) {
      setOrders((prev) => prev - 6);
    }
  };
  const changeNext = () => {
    if (orders < 1000) {
      setOrders((prev) => prev + 1);
    }
  };

  return (
    <>
      <div className={`${styles.box} ${orders < 1000 ? "" : styles.hidden} `}>
        <div className={`${styles.body} ${orders <= 5 ? "" : styles.removeBg}`}>
          <Row>
            <Col>
              <Row
                className={`${styles.field} ${
                  orders >= 7 && orders <= 8 ? "" : styles.hidden
                }`}
              >
                <div
                  className={`${styles.fieldContent} ${styles.cardBody} ${
                    orders === 8 ? "" : styles.hidden
                  }`}
                >
                  <div className={styles.cardTitle}>필드</div>
                  <div className={styles.cardContent}>
                    <div>주자들의 진루 상황을 파악할 수 있습니다.</div>
                    <div>주자들의 위치는 붉은 원으로 표시됩니다.</div>
                    <div>다음 타자, 혹은 다음 투수를 교체할 때</div>
                    <div>참고할 수 있습니다.</div>
                  </div>
                </div>
              </Row>
              <Row>
                <Col>
                  <Row
                    className={`${styles.strikeZone} ${
                      orders >= 11 && orders <= 12 ? "" : styles.hidden
                    }`}
                  >
                    <div
                      className={`${styles.strikeZoneContent} ${
                        styles.cardBody
                      } ${orders === 12 ? "" : styles.hidden}`}
                    >
                      <div className={styles.cardTitle}>스트라이크 존</div>
                      <div className={styles.cardContent}>
                        <div>현재 타석의 투구 기록을 확인할 수 있습니다.</div>
                        <div>
                          던진 순서대로 숫자가 매겨지며, 공의 색으로
                          스트라이크와 볼을 구분할 수 있습니다.
                        </div>
                      </div>
                    </div>
                  </Row>
                </Col>
                <Col>
                  <Row
                    className={`${styles.ballVel} ${
                      orders >= 15 && orders <= 16 ? "" : styles.hidden
                    }`}
                  >
                    <div
                      className={`${styles.ballVelContent} ${styles.cardBody} ${
                        orders === 16 ? "" : styles.hidden
                      }`}
                    >
                      <div className={styles.cardTitle}>구속</div>
                      <div className={styles.cardContent}>
                        <div>직전 투구의 구속과 구종을 알 수 있습니다.</div>
                        <div>해당 투수가 주로 구사하는 구종을 파악하면,</div>
                        <div> 선수 교체에 도움이 될 수 있습니다.</div>
                      </div>
                    </div>
                  </Row>
                  <Row
                    className={`${styles.bso} ${
                      orders >= 19 && orders <= 20 ? "" : styles.hidden
                    }`}
                  >
                    <div
                      className={`${styles.bsoContent} ${styles.cardBody} ${
                        orders === 20 ? "" : styles.hidden
                      }`}
                    >
                      <div className={styles.cardTitle}>볼 카운트</div>
                      <div className={styles.cardContent}>
                        <div>현재 타석의 볼 카운트를 확인할 수 있습니다.</div>
                        <div>아웃되기 직전에는 선수를 교체할 수 없으므로,</div>
                        <div>미리 확인하면 교체 시 도움이 됩니다.</div>
                      </div>
                    </div>
                  </Row>
                </Col>
              </Row>
            </Col>
            <Col>
              <Row>
                <Row
                  className={`${styles.score} ${
                    orders >= 23 && orders <= 24 ? "" : styles.hidden
                  }`}
                >
                  <div
                    className={`${styles.scoreContent} ${styles.cardBody} ${
                      orders === 24 ? "" : styles.hidden
                    }`}
                  >
                    <div className={styles.cardTitle}>전광판</div>
                    <div className={styles.cardContent}>
                      <div>이닝별 점수를 확인할 수 있는 전광판입니다.</div>
                      <div>현재 이닝은 붉은 색으로 표시되므로, </div>
                      <div>진행 상황을 파악하는 데에 도움이 됩니다.</div>
                    </div>
                  </div>
                </Row>
              </Row>
              <Row>
                <Col>
                  <Row>
                    <Row
                      className={`${styles.pitcher} ${
                        orders >= 27 && orders <= 28 ? "" : styles.hidden
                      }`}
                    >
                      <div
                        className={`${styles.pitcherContent} ${
                          styles.cardBody
                        } ${orders === 28 ? "" : styles.hidden}`}
                      >
                        <div className={styles.cardTitle}>투수</div>
                        <div className={styles.cardContent}>
                          <div>양 팀의 투수를 확인할 수 있습니다.</div>
                          <div>현재 이닝의 투수는 전광판과 마찬가지로 </div>
                          <div>붉은 색으로 표시되어 있습니다.</div>
                        </div>
                      </div>
                    </Row>
                  </Row>
                  <Row>
                    <Row
                      className={`${styles.hitter} ${
                        orders >= 31 && orders <= 32 ? "" : styles.hidden
                      }`}
                    >
                      <div
                        className={`${styles.hitterContent} ${
                          styles.cardBody
                        } ${orders === 32 ? "" : styles.hidden}`}
                      >
                        <div className={styles.cardTitle}>타자</div>
                        <div className={styles.cardContent}>
                          <div>현재 타석의 타자를 확인할 수 있습니다.</div>
                          <div>해당 타자에 대한 정보와 함께,</div>
                          <div>이번 경기의 기록을 확인할 수 있습니다.</div>
                        </div>
                      </div>
                    </Row>
                  </Row>
                  <Row>
                    <Row
                      className={`${styles.buttons} ${
                        orders >= 35 && orders <= 36 ? "" : styles.hidden
                      }`}
                    >
                      <div
                        className={`${styles.buttonsContent} ${
                          styles.cardBody
                        } ${orders === 36 ? "" : styles.hidden}`}
                      >
                        <div className={styles.cardTitle}>선수 교체, 스킵</div>
                        <div className={styles.cardContent}>
                          <div>경기 도중 사용할 수 있는 버튼입니다.</div>
                          <div>선수 교체 버튼을 통해 다음 선수를 교체하고,</div>
                          <div>스킵을 통해 전체 경기를 스킵할 수 있습니다.</div>
                        </div>
                      </div>
                    </Row>
                  </Row>
                </Col>
                <Col>
                  <Row>
                    <Row
                      className={`${styles.log} ${
                        orders >= 39 && orders <= 40 ? "" : styles.hidden
                      }`}
                    >
                      <div
                        className={`${styles.logContent} ${styles.cardBody} ${
                          orders === 40 ? "" : styles.hidden
                        }`}
                      >
                        <div className={styles.cardTitle}>중계 기록</div>
                        <div className={styles.cardContent}>
                          <div>게임의 모든 진행상황에 대한 기록입니다.</div>
                          <div>지나간 타석이나 이닝에 대한 정보는 물론,</div>
                          <div>선수 교체 기록까지 확인하실 수 있습니다.</div>
                        </div>
                      </div>
                    </Row>
                  </Row>
                </Col>
              </Row>
            </Col>
          </Row>
          <div className={styles.pagingButton}>
            <div
              className={`${styles.prev} ${
                orders > 5 && orders % 4 === 0 ? "" : styles.remove
              }`}
              onClick={changePrev}
            >
              PREV
            </div>
            <div
              className={`${styles.next} ${
                orders > 5 && orders % 4 === 0 ? "" : styles.remove
              }`}
              onClick={changeNext}
            >
              NEXT
            </div>
          </div>
        </div>
        <div
          className={`${styles.confirm} ${
            orders >= 1 && orders <= 4 ? "" : styles.hidden
          } ${orders >= 6 ? styles.remove : ""}`}
        >
          <p
            className={`${styles.title} ${
              orders >= 2 && orders <= 4 ? "" : styles.hidden
            }`}
          >
            첫 게임에서는 튜토리얼을 체험하실 수 있습니다.
          </p>
          <p
            className={`${styles.content} ${
              orders >= 3 && orders <= 4 ? "" : styles.hidden
            }`}
          >
            체험하시겠습니까?
          </p>
          <div
            className={`${styles.button} ${orders === 4 ? "" : styles.hidden}`}
          >
            <div className={styles.continue} onClick={nextOrder}>
              CONTINUE
            </div>
            <div className={styles.skip} onClick={skipTuto}>
              SKIP
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Tutorial;
