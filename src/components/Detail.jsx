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
import qr1 from "/qr1.jpg"
import qr2 from "/qr2.jpg"
import mail from "/mail.png"
import tel from "/tel.png"
import user from "/person-icon.png"
import { motion } from "framer-motion"
import { staggerContainer } from "../utils/motion"
import { fadeIn, textVariant } from "../utils/motion"
import { FaAngleUp } from "react-icons/fa"
import mega from '/megaphone.png'
import Header from './Header'
import ScrollToTop from "react-scroll-to-top"
import { useLanguageStore } from "../store"
const Detail = () => {
  const [showTopBtn, setShowTopBtn] = useState(false)
  const isL = useLanguageStore((state) => state.language)
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 400) {
        setShowTopBtn(true)
      } else {
        setShowTopBtn(false)
      }
    })
    if(isL === null || isL == undefined || isL === 'null' || isL === 'undefined' ){
      localStorage.setItem("L","TH")
    }
  }, [])
  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }
  return (
    <>
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
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;โครงการผลิตเครื่องปรับอากาศของบริษัทไฮเซ่นส์(ประเทศไทย)
                  ได้ร่วมมือกับบริษัท SNC ตั้งแต่ปี 2019 ตั้งอยู่ในจังหวัดระยอง
                  ธุรกิจหลักคือผลิตเครื่องปรับอากาศโดยการร่วมมือกันระหว่างทั้งสองฝ่ายเป็นการผลิตแบบ
                  OEM หลังจากที่มีการร่วมมือและพัฒนาร่วมกันมาหลายปี
                  เราได้เติบโตและประสบความสำเร็จ จนกระทั้งเดือนมีนาคม ปี 2023
                  มียอดผลิตส่งออกแล้วมากกว่า 2.2 ล้านชุด
                  ในขณะเดียวกันปีนี้เราหวังว่าจะได้ร่วมมือกับซัพพลายเออร์ที่มีคุณภาพในหลากหลายเครือข่ายมากขึ้น
                  ขณะนี้ทางเรากำลังมองหาซัพพลายเออร์ที่เป็นผู้ผลิตและจำหน่ายวัสดุต่างๆ
                  สำหรับโครงการผลิตเครื่องปรับอากาศบริษัทไฮเซ่นส์(ประเทศไทย)
                  ดังนี้
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
                ท่อทองแดง (Copper pipe)
              </p>
              <h5>ข้อกำหนด:</h5>
              <div className={`${css.childDetails}`}>
                <p>
                  ① มีกำลังการผลิตในทุกกระบวนการ เช่น การตัดท่อ การดัดท่อ
                  การขึ้นรูป การจัดพอร์ต และ การเชื่อม เป็นต้น
                  มีประสิทธิภาพในการทดสอบบางประเภท
                </p>
                <p>② ความต้องการต่อปีประมาณ 8 ล้านชิ้น</p>
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
                ใบพัดลม (fan)
              </p>
              <h5>ข้อกำหนด:</h5>
              <div className={`${css.childDetails}`}>
                <p>
                  ① พัดลมชนิด Axial Fans และพัดลมชนิด centrifugal fan
                  ที่สามารถเปิดแม่พิมพ์ร่วมกันได้ และมีประสิทธิภาพในการทดสอบ
                </p>
                <p>② ความต้องการต่อปีประมาณ 2.5 ล้านชิ้น</p>
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
                ท่อลมแอร์
              </p>
              <h5>ข้อกำหนด:</h5>
              <div className={`${css.childDetails}`}>
                <p>
                  ① มีกำลังในการผลิตชิ้นส่วนขึ้นรูปและมีประสิทธิภาพในการทดสอบ
                </p>
                <p>② ความต้องการต่อปีประมาณ 600,000 ชิ้น</p>
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
                แผง PCBA (PCBA Board )
              </p>
              <h5>ข้อกำหนด:</h5>
              <div className={`${css.childDetails}`}>
                <p>
                  ① มีเครื่องแทรกอัตโนมัติ AI SMT( Auto insertion surface
                  mount) เครื่องบัดกรีคลื่น(Wave Soldering Machine)
                  และเครื่องตรวจจับความผิดพลาดของบอร์ด PCB เป็นต้น
                </p>
                <p>
                  ② มีช่องทางการจัดซื้อที่มีคุณภาพสำหรับชิ้นส่วนอิเล็กทรอนิกส์จะพิจารณาเป็นพิเศษ
                </p>
                <p>
                  ③
                  ความต้องการต่อปีประมาณ 600,000 ชิ้น
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
                โฟม (foam)
              </p>
              <h5>ข้อกำหนด:</h5>
              <div className={`${css.childDetails}`}>
                <p>
                  ① มีกำลังในการผลิตโฟมกันกระแทก และโฟมโครงสร้าง
                </p>
                <p>
                  ② ความต้องการต่อปีประมาณ 4 ล้านชิ้น
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
                กล่องกระดาษ (carton box)
              </p>
              <h5>ข้อกำหนด:</h5>
              <div className={`${css.childDetails}`}>
                <p>
                  ① มีเครื่องพิมพ์สี (6+1 สี), เครื่องตัด, เครื่องเคลือบ และอุปกรณ์ตรวจสอบอื่นๆ
                </p>
                <p>
                  ② ความต้องการต่อปีประมาณ 1.8 ล้านชิ้น
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
                กัสเซต (Gusset) 
              </p>
              <h5>ข้อกำหนด:</h5>
              <div className={`${css.childDetails}`}>
                <p>
                ① มีกำลังในการผลิตกระดาษฉากขึ้นรูป มีเครื่องยิงตะปูและเครื่องติดกาว
                </p>
                <p>② ความต้องการต่อปีประมาณ  3 ล้านชิ้น</p>
           
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
                เพื่อเติบโตและพัฒนาซัพพลายเชน (Supply chain) ของประเทศไทย
                รวมทั้งขยายเครือข่ายความร่วมมือทางด้านอุตสาหกรรมให้กว้างขึ้น
                ตอนนี้ทางเราเปิดรับซัพพลายเออร์และหุ้นส่วน
                เราพร้อมและยินดีที่จะร่วมงานกับคุณ สำหรับข้อมูลเพิ่มเติม
                ติดต่อช่องทางดังนี้
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
                          Mr.Liang Zhen Yi  และ  Mr.Sittipong
                        </p>
                        <p>
                          <img
                            src={tel}
                            className={`${css.logoContact}`}
                            alt="imgContact"
                          />{" "}
                          094-023-2161 หรือ 099-1909-259 
                        </p>
                        <p>
                          <img
                            src={mail}
                            className={`${css.logoContact}`}
                            alt="imgContact"
                          />{" "}
                          Sittipong-hit@sncformer.com และ Liangzhenyi@hisense.com
                        </p>
                      </motion.div>
                    </div>
                    <motion.div
                       variants={fadeIn("left", "tween", 0.2, 1)}
                    className="d-flex justify-content-center mt-3">
                      
                      <div className={`${css.boxMega}`}>
                        <p style={{fontWeight:'bold',fontSize:'20px'}}><img src={mega} alt={"mega"}/>ประกาศนี้มีผลถึงวันที่ 30 มิถุนายน 2023</p>
                      </div>
                      </motion.div>
                    
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
    </>
  )
}

export default Detail
