import React from "react";

export default function HeaderTopArea() {
  return (
    <div className="tp-header-top theme-bg">
      <div className="admission-marquee">
        <div className="marquee-content">
          <span><strong>Admissions Open:</strong> Sree Jayam Schools - Enroll now for Academic Year 2024-25. <strong>Pre-KG to Class XII</strong>. Limited Seats Available!</span>
          <span><strong>Quality Education:</strong> Ranked among the best ICSE Schools in Vellore. Visit our campus for more details.</span>
          <span><strong>Contact Us:</strong> +91 416 2234033 or email us at info@sreejayamschool.edu.in</span>
          {/* Duplicating for seamless loop */}
          <span><strong>Admissions Open:</strong> Sree Jayam Schools - Enroll now for Academic Year 2024-25. <strong>Pre-KG to Class XII</strong>. Limited Seats Available!</span>
          <span><strong>Quality Education:</strong> Ranked among the best ICSE Schools in Vellore. Visit our campus for more details.</span>
          <span><strong>Contact Us:</strong> +91 416 2234033 or email us at info@sreejayamschool.edu.in</span>
        </div>
      </div>
    </div>
  );
}
