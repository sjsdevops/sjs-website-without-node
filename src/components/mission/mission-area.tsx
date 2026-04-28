import ImagePlaceholder from "@/components/ui/placeholder";
import { RightArrowTwo } from "../svg";

const missionData = [
  {
    id: 1,
    title: "Creativity",
    description:
      "Encouraging behaviours which <br/> encompass notions of originality, and <br/> problem-solving in all that we do.",
  },
  {
    id: 2,
    title: "Scholarship",
    description:
      "Encouraging behaviours which <br/> encompass notions of originality, and <br/> problem-solving in all that we do.",
  },
  {
    id: 3,
    title: "Community",
    description:
      "Encouraging behaviours which <br/> encompass notions of originality, and <br/> problem-solving in all that we do.",
  },
];

type IProps = {
  top_cls?: string;
}
export default function MissionArea({top_cls='grey-bg pt-30'}: IProps) {
  return (
    <section className={`tp-our-mission-area ${top_cls}`}>
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div
              className="tp-our-mission-thumb"
            >
              <ImagePlaceholder text="Mission Core Demo" height="600px" delay=".2s" />
            </div>
          </div>
          <div className="col-lg-8">
            <div
              className="tp-our-mission-wrapper wow fadeInUp"
              data-wow-delay=".5s"
            >
              <div className="tp-our-mission-heading">
                <h3 className="tp-our-mission-title">Mission and values</h3>
                <p>
                  We prepare you to launch your career by providing a
                  supportive, creative, <br /> and professional. Our mission is
                  to prepare students to understand, contribute <br /> to, and
                  succeed in a rapidly changing society.
                </p>
              </div>

              {missionData.map((item, i) => (
                <div
                  key={item.id}
                  className={`tp-our-mission-item d-flex align-items-center justify-content-center justify-content-md-between ${
                    i !== missionData.length - 1 ? "mb-20" : ""
                  }`}
                >
                  <div className="tp-our-mission-item-content">
                    <h4 className="tp-our-mission-item-title">{item.title}</h4>
                    <p
                      dangerouslySetInnerHTML={{ __html: item.description }}
                    ></p>
                    <div className="tp-our-mission-item-btn">
                      <a className="tp-btn-3" href="#">
                        Learn More{" "}
                        <i>
                          <RightArrowTwo clr="white" />
                        </i>
                      </a>
                    </div>
                  </div>
                  <div className="tp-our-mission-item-thumb" style={{ width: '220px' }}>
                    <ImagePlaceholder text={item.title} height="150px" delay={`.${i + 3}s`} rounded="20px" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
