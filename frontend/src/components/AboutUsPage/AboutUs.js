import React from "react";
import TeamMember from "./TeamMember";

const AboutUs = () => {
  return (
    <div className="about-page">
      <div className="about-card">
        <div className="about-image-div">
          <img
            alt="fried rice on pot"
            src="https://images.unsplash.com/photo-1489444444961-d0fda97f0986?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
          />
        </div>
        <div className="about-info-div">
          <h1 id="card-header">The Mission</h1>
          <p id="card-desc">
            Finding Really Authentic, Home-cooked Food is Not a Luxury Many City
            Dwellers Can Easily Afford. Yes, We Have Access to Hundreds of Food
            Choices at Our Fingertips. But None Are as Authentic as a Meal From
            a Grandma's Kitchen. Our Mission is to Connect New Yorkers to
            Home-cooked Meals in Their Area. Wether You're Feeling a Little
            Home-sick or Want to Try a Home-cooked Meal From a Different
            Culture, We Strive to Deliver You With a Meal You Won't Find
            Elsewhere.
          </p>
        </div>
      </div>
      <div className="about-card">
        <div className="about-image-div">
          <img
            alt="fried rice on pot"
            src="https://images.unsplash.com/photo-1485963631004-f2f00b1d6606?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=968&q=80"
          />
        </div>
        <div className="about-info-div">
          <h1 id="card-header">The Experience</h1>
          <p id="card-desc">
            We Pride Ourselves on Providing an Authentic Experience for Our
            Users. We Enlist the Most Talented and Exprienced Grandmas to Share
            Their Recipes and Wisdom. We Believe That Eating a Meal Should be an
            Experiece Worth Savoring and That is Why We Provide the High
            Quality, Authentic Meals From Traditional Cuisines From Aroung The
            World.
          </p>
        </div>
      </div>
      <div className="team-about-card">
        <div className="about-image-div">
          <img
            alt="fried rice on pot"
            src="https://www.scienceabc.com/wp-content/uploads/2015/08/Ants-Defence-Mechanism.jpg"
          />
        </div>
        <div className="about-info-div">
          <h1 id="card-header">The Team</h1>
          <div id="team">
            <TeamMember
              name="Morteza Khaki"
              img={
                "https://media.licdn.com/dms/image/C4D03AQHCTKGRV7pCTw/profile-displayphoto-shrink_200_200/0?e=1562803200&v=beta&t=g9khW_qo_raiosbnKhEOejb2iZzFdx5bXzQQrKwRSa4"
              }
              linkedin={"https://www.linkedin.com/in/morteza-khaki-a7b207175/"}
              github={"https://github.com/khakimorteza"}
            />
            <TeamMember
              name="Muna Sharma"
              img={
                "https://media.licdn.com/dms/image/C4E03AQGzTZdZzGbevA/profile-displayphoto-shrink_800_800/0?e=1562803200&v=beta&t=dkis0-ZP5nd3A1yvP1GAX0yRpOiV05RaqSuYwKt_8zk"
              }
              linkedin={"https://www.linkedin.com/in/muna-r-sharma/"}
              github={"https://github.com/munarsharma"}
            />

            <TeamMember
              name="Jean Max Mezalon"
              img={
                "https://media.licdn.com/dms/image/C5603AQGRdf5YV2R8_g/profile-displayphoto-shrink_800_800/0?e=1562803200&v=beta&t=2vVK6MFkqAgYnsdmFQQxQSd-qrtDY2UsFUOvSE42yPA"
              }
              linkedin={"https://www.linkedin.com/in/jean-mezalon/"}
              github={"https://github.com/jmezalon"}
            />
            <TeamMember
              name="Abid Hussain"
              img={
                "https://media.licdn.com/dms/image/C5603AQGwxa271VdxpQ/profile-displayphoto-shrink_800_800/0?e=1562803200&v=beta&t=rc3ElUSnHFylChERC7B_ZHyFSiKtoE3WGMQVgW9LrsM"
              }
              linkedin={"https://www.linkedin.com/in/abid-h-39626b140/"}
              github={"https://github.com/Ne0phite"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
