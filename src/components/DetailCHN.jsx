import React, { useState, useEffect } from "react"
import css from "./header.module.css"
import one from "/12.png"
import two from "/2.png"
import three from "/3.png"
import four from "/4.png"
import five from "/5.png"
import six from "/6.png"
import seven from "/7.png"
import eight from "/8.png"
import product1 from "/Pic01.jpg"
import product2 from "/Pic02.jpg"
import product3 from "/Pic03.jpg"
import product4 from "/Pic04.jpg"
import product5 from "/Pic05.jpg"
import product6 from "/Pic06.jpg"
import product61 from "/Pic06-1.jpg"
import product7 from "/Pic07.jpg"
import product8 from "/Pic08.jpg"
import mega from '/megaphone.png'
import qr1 from "/qr1.jpg"
import qr2 from "/qr2.jpg"
import mail from "/mail.png"
import tel from "/tel.png"
import user from "/person-icon.png"
import { motion } from "framer-motion"
import { staggerContainer } from "../utils/motion"
import { fadeIn, textVariant } from "../utils/motion"
import { FaAngleUp } from "react-icons/fa"
import ScrollToTop from "react-scroll-to-top"
import Header from "./Header"
const DetailCHN = () => {
  const [showTopBtn, setShowTopBtn] = useState(false)
  
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 400) {
        setShowTopBtn(true)
      } else {
        setShowTopBtn(false)
      }
    })
  }, [])
  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }
  return (
    <div className={`${css.chn}`}>
    <Header />
      <ScrollToTop
        smooth={true}
        style={{
          background: "#45C2EA",
          borderRadius: "50%",
          width: "60px",
          height: "60px",
          color: "#fff",
        }}
      />
      <div className="container">
        <motion.section
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
        >
          <a className="anchor" id="sec1"></a>
          <motion.div
            className="container d-flex justify-content-center mt-4"
            variants={fadeIn("right", "tween", 0.2, 1)}
          >
            <div>
              <h1 className="d-flex justify-content-center text-center">
                <p>
                  <i
                    className="fa-solid fa-book me-2 "
                    style={{ color: "#45C2EA" }}
                  ></i>{" "}
                  ประวัติบริษัทโดยย่อ
                </p>
              </h1>
              <hr />
              <div>
                <p className={`${css.textSm}`}>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;海信空调公司泰国项目从2019年起开展与SNC公司的合作，位于罗勇府，主营业务为空调整机产品的生产，双方合作方式为OEM代工，经过多年的合作发展，我们互相成长、彼此成就，截至2023年3月实际产出超过220万套，同时23年度我们希望可以和更多领域的优秀供方合作，现公开海信空调公司泰国项目采购信息；
                </p>
              </div>
            </div>
          </motion.div>
        </motion.section>
        <motion.section
          className="mt-3 mb-2"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
        >
          <motion.div variants={fadeIn("left", "tween", 0.2, 1)}>
            <div className="container d-flex justify-content-center">
              <h1 className="d-flex justify-content-center">
                <i
                  className="fa-solid fa-boxes-stacked me-2"
                  style={{ color: "#45C2EA" }}
                ></i>{" "}
                ชนิดของสินค้า
              </h1>
              <a className="anchor" id="sec2"></a>
              <hr />
            </div>
            <div
              className="container"
              style={{ border: "1px solid #7CD8F5", borderRadius: "10px" }}
            >
              <p className={`${css.textType}`}>
                <img src={one} alt="number" style={{ width: "5rem" }} />
                铜管
              </p>
              <h5>要求:</h5>
              <div className={`${css.childDetails}`}>
                <p>
                  ① 具有铜管开料、弯管成型、端口处理、焊接等全流程生产能力，具备一定型式试验能力；
                </p>
                <p>② 年需求总量约800万件</p>
              </div>
              <div
                style={{ width: "100%" }}
                className="d-flex justify-content-center"
              >
                <img
                  src={product2}
                  alt={"products"}
                  className={`${css.imgProduct}`}
                />
              </div>
            </div>
          </motion.div>
        </motion.section>
        <motion.section
          className="mt-3 mb-2"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
        >
          <motion.div variants={fadeIn("right", "tween", 0.2, 1)}>
            <a className="anchor" id="sec3"></a>
            <div
              className="container"
              style={{ border: "1px solid #7CD8F5", borderRadius: "10px" }}
            >
              <p className={`${css.textType}`}>
                <img src={two} alt="number" style={{ width: "5rem" }} />
                风扇
              </p>
              <h5>要求:</h5>
              <div className={`${css.childDetails}`}>
                <p>
                  ① 轴流风扇、离心风扇，可配合开模，具备风扇型式试验能力
                </p>
                <p>② 年需求总量约250万件</p>
              </div>
              <div
                style={{ width: "100%" }}
                className="d-flex justify-content-center"
              >
                <img
                  src={product3}
                  alt={"products"}
                  className={`${css.imgProduct}`}
                />
              </div>
            </div>
          </motion.div>
        </motion.section>

        <motion.section
          className="mt-3 mb-2"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
        >
          <motion.div variants={fadeIn("left", "tween", 0.2, 1)}>
            <a className="anchor" id="sec4"></a>
            <div
              className="container"
              style={{ border: "1px solid #7CD8F5", borderRadius: "10px" }}
            >
              <p className={`${css.textType}`}>
                <img src={three} alt="number" style={{ width: "5rem" }} />
                风管
              </p>
              <h5>要求:</h5>
              <div className={`${css.childDetails}`}>
                <p>
                  ① 具备挤塑件生产能力和检验能力
                </p>
                <p>② 年需求总量约60万件</p>
              </div>
              <div
                style={{ width: "100%" }}
                className="d-flex justify-content-center"
              >
                <img
                  src={product4}
                  alt={"products"}
                  className={`${css.imgProduct}`}
                />
              </div>
            </div>
          </motion.div>
        </motion.section>
        <motion.section
          className="mt-3 mb-2"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
        >
          <motion.div variants={fadeIn("right", "tween", 0.2, 1)}>
            <a className="anchor" id="sec5"></a>
            <div
              className="container"
              style={{ border: "1px solid #7CD8F5", borderRadius: "10px" }}
            >
              <p className={`${css.textType}`}>
                <img src={four} alt="number" style={{ width: "5rem" }} />
                五、PCBA
              </p>
              <h5>要求:</h5>
              <div className={`${css.childDetails}`}>
                <p>
                  ① 设备AI卧式、SMT、波峰焊、防呆检验等设备
                </p>
                <p>
                  ② 具备完整电子元器件采购渠道优先
                </p>
                <p>
                  ③
                  年需求总量约60万件
                </p>
              </div>
              <div
                style={{ width: "100%" }}
                className="d-flex justify-content-center"
              >
                <img
                  src={product5}
                  alt={"products"}
                  className={`${css.imgProduct}`}
                />
              </div>
            </div>
          </motion.div>
        </motion.section>
        <motion.section
          className="mt-3 mb-2"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
        >
          <motion.div variants={fadeIn("left", "tween", 0.2, 1)}>
            <a className="anchor" id="sec6"></a>
            <div
              className="container"
              style={{ border: "1px solid #7CD8F5", borderRadius: "10px" }}
            >
              <p className={`${css.textType}`}>
                <img src={five} alt="number" style={{ width: "5rem" }} />
                六、泡沫
              </p>
              <h5>要求:</h5>
              <div className={`${css.childDetails}`}>
                <p>
                  ① 包装泡沫、结构泡沫
                </p>
                <p>
                  ② 年需求总量约400万件
                </p>

              </div>
              <div
                style={{ width: "100%" }}
                className="d-flex justify-content-center flex-sm-column flex-xl-row flex-wrap
                "
              >
                <img
                  src={product6}
                  alt={"products"}
                  className={`${css.imgProduct} me-2`}
                />
                <img
                  src={product61}
                  alt={"products"}
                  className={`${css.imgProduct}`}
                />
              </div>
            </div>
          </motion.div>
        </motion.section>
        <motion.section
          className="mt-3 mb-2"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
        >
          <motion.div variants={fadeIn("right", "tween", 0.2, 1)}>
            <a className="anchor" id="sec7"></a>
            <div
              className="container"
              style={{ border: "1px solid #7CD8F5", borderRadius: "10px" }}
            >
              <p className={`${css.textType}`}>
                <img src={six} alt="number" style={{ width: "5rem" }} />
                七、纸箱
              </p>
              <h5>要求:</h5>
              <div className={`${css.childDetails}`}>
                <p>
                  ① 具备彩色打印机（6+1色），裁切机、裱纸机、检验设备等
                </p>
                <p>
                  ② 年需求总量约180万件
                </p>
              </div>
              <div
                style={{ width: "100%" }}
                className="d-flex justify-content-center"
              >
                <img
                  src={product7}
                  alt={"products"}
                  className={`${css.imgProduct}`}
                />
              </div>
            </div>
          </motion.div>
        </motion.section>
        <motion.section
          className="mt-3 mb-2"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
        >
          <motion.div variants={fadeIn("left", "tween", 0.2, 1)}>
            <a className="anchor" id="sec8"></a>
            <div
              className="container"
              style={{ border: "1px solid #7CD8F5", borderRadius: "10px" }}
            >
              <p className={`${css.textType}`}>
                <img src={seven} alt="number" style={{ width: "5rem" }} />
                角撑
              </p>
              <h5>要求:</h5>
              <div className={`${css.childDetails}`}>
                <p>
                ① 具备纱管纸生产、设备打钉、涂胶
                </p>
                <p>② 年需求总量300万件</p>
           
              </div>
              <div
                style={{ width: "100%" }}
                className="d-flex justify-content-center"
              >
                <img
                  src={product8}
                  alt={"products"}
                  className={`${css.imgProduct}`}
                />
              </div>
            </div>
          </motion.div>
        </motion.section>
        {/* <motion.section
          className="mt-3 mb-2"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
        >
          <motion.div variants={fadeIn("right", "tween", 0.2, 1)}>
            <a className="anchor" id="sec3"></a>
            <div
              className="container"
              style={{ border: "1px solid #7CD8F5", borderRadius: "10px" }}
            >
              <p className={`${css.textType}`}>
                <img src={two} alt="number" style={{ width: "5rem" }} />
                ท่อทองแดง (Copper pipe)
              </p>
              <h5>ข้อกำหนด:</h5>
              <div className={`${css.childDetails}`}>
                <p>
                  ① มีศักยภาพในการผลิตและมีกำลังในการจัดส่งสินค้า
                  และมีฐานลูกค้าเกี่ยวข้องกับเครื่องใช้ไฟฟ้าภายในบ้าน
                </p>
                <p>
                  ② เครื่องดัดท่อ (pipe bending machine) 2 เครื่อง
                  เครื่องขยายท่อ (pipe expanding machine) 2 เครื่อง
                  และอุปกรณ์ตรวจสอบมากกว่า 1 ชุดขึ้นไป
                </p>
                <p>③ รอบระยะเวลาบัญชี 90-120 วัน</p>
              </div>
              <div
                style={{ width: "100%" }}
                className="d-flex justify-content-center"
              >
                <img
                  src={product2}
                  alt={"products"}
                  className={`${css.imgProduct}`}
                />
              </div>
            </div>
          </motion.div>
        </motion.section> */}
        <motion.section
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
        >
          <div className="container">
            <motion.div
              className={`${css.childDetails} `}
              variants={fadeIn("bottom", "tween", 0.2, 1)}
            >
              <p className={`mt-4`}>
              为完善泰国供应链的培养以及发展，也为进一步扩宽合作领域，现面向全泰国供应商合作伙伴，诚邀加入我们的供应链，详细信息请联系以下：
              </p>
            </motion.div>
            <div className="d-flex justify-content-center flex-column">
              <motion.div variants={fadeIn("left", "tween", 0.2, 0.8)}>
                <h1 className="mt-4">ช่องทางการติดต่อ</h1>
              </motion.div>
              <hr />
              <div className="container">
                <div className="row">
                  <div className="col col-xl-6">
                    <motion.div
                      className="d-flex flex-wrap justify-content-center"
                      variants={fadeIn("right", "tween", 0.2, 1)}
                    >
                      <div>
                        <img
                          src={qr1}
                          alt="QRCODE"
                          className={`${css.qrcode1}`}
                        />
                      </div>
                      <div>
                        <img
                          src={qr2}
                          alt="QRCODE"
                          className={`${css.qrcode2}`}
                        />
                      </div>
                    </motion.div>
                  </div>
                  <div className="col col-xl-6">
                    <div className="container d-flex">
                      <motion.div
                        className={`${css.contact} mb-2`}
                        variants={fadeIn("left", "tween", 0.2, 1)}
                      >
                        <p>
                          <img
                            src={user}
                            className={`${css.logoContact}`}
                            alt="imgContact"
                          />{" "}
                          Mr.Liang Zhen Yi  和  Mr.Sittipong
                        </p>
                        <p>
                          <img
                            src={tel}
                            className={`${css.logoContact}`}
                            alt="imgContact"
                          />{" "}
                          094-023-2161 、 099-1909-259
                        </p>
                        <p>
                          <img
                            src={mail}
                            className={`${css.logoContact}`}
                            alt="imgContact"
                          />{" "}
                          Sittipong-hit@sncformer.com 、 Liangzhenyi@hisense.com
                        </p>
                        
                      </motion.div>
                      
                    </div>
                    <div>
                    <motion.div
                       variants={fadeIn("left", "tween", 0.2, 1)}
                    className="d-flex justify-content-center mt-3">
                      
                      <div className={`${css.boxMega}`}>
                        <p style={{fontWeight:'bold',fontSize:'20px'}}><img src={mega} alt={"mega"}/>本篇公告有效期截止2023年6月30日</p>
                      </div>
                      </motion.div>
                      
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.section>
      </div>
      <div className={`${css.footer}`}>
        <p>บริษัทคู่ค้า : บริษัท เอส เอ็น ซี ครีเอติวิตี้ แอนโทโลจี จำกัด</p>
        <p>
          เลขที่ 88/21-24 หมู่2 ตำบลมะขามคู่ อำเภอนิคมพัฒนา จังหวัดระยอง 21180
        </p>
      </div>
    </div>
  )
}

export default DetailCHN
