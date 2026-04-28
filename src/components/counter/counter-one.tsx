import React from "react";
import CounterItem from "./counter-item";
import { schoolData } from "@/data/schoolData";

export default function CounterOne() {
  const { stats } = schoolData;
  
  return (
    <section className="counter-area tp-counter-wrap pt-120 pb-120">
      <div className="container">
        <div
          className="tp-counter-bg wow fadeInUp"
          data-wow-delay=".3s"
          style={{ 
            backgroundColor: '#1A3C6E', 
            backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.05) 1px, transparent 0)',
            backgroundSize: '30px 30px'
          }}
        >
          <div className="row">
            {stats.map((item, index) => (
            <div key={index} className="col-lg-3 col-md-6">
              <div className="tp-counter-item text-center">
                <h3 className="tp-counter-count mb-10">
                  <CounterItem min={0} max={item.value}/>
                  {item.suffix}
                </h3>
                <p>{item.label}</p>
              </div>
            </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
