import { useState } from "react";

const Section = ({ title, description, isVisible, SetisVisible }) => {
  //const [isVisible, SetisVisible] = useState(false);
  return (
    <>
      <div className="border border-black m-3 p-3">
        <h1 className="font-bold text-l">{title}</h1>
        <button
          className="px-1 py-1 bg-blue-600 text-white rounded-md border border-blue-700 hover:bg-blue-700 transition cursor-pointer"
          onClick={() => {
            //SetisVisible(isVisible ? false : true);
            debugger;
            SetisVisible();
          }}
        >
          {!isVisible ? "Show" : "hide"}
        </button>
        {isVisible && <p>{description}</p>}
      </div>
    </>
  );
};

const Instamart1 = () => {
  const [visibleSection, setVisibleSection] = useState("Contact");

  return (
    <>
      <h1 className="font-bold text-4xl p-3">InstaMart</h1>

      <Section
        title="Team InstaMart"
        description="But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?"
        isVisible={visibleSection === "Team"}
        SetisVisible={() =>
          setVisibleSection(visibleSection === "Team" ? null : "Team")
        }
      />

      <Section
        title="About InstaMart"
        description="But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?"
        isVisible={visibleSection === "About"}
        SetisVisible={() =>
          setVisibleSection(visibleSection === "About" ? null : "About")
        }
      />

      <Section
        title="Contact InstaMart"
        description="But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?"
        isVisible={visibleSection === "Contact"}
        SetisVisible={() =>
          setVisibleSection(visibleSection === "Contact" ? null : "Contact")
        }
      />
    </>
  );
};

export default Instamart1;
