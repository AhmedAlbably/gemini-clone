
import { useContext } from "react";
import { assets } from "../../assets/assets";
import { Context } from "../../context/Context";
import "./main.css";

const Main = () => {
  const {
    onSent,
    recentPrompt,
    showResult,
    loading,
    resultData,
    setInput,
    input,
  } = useContext(Context);

  return (
    <main className="main">
      <nav className="nav">
        <p>Gemini</p>
        <img src={assets.user_icon} alt="user image" />
      </nav>

      <div className="main-container">
        {!showResult ? (
          <>
            <div className="greet">
              <p>
                <span>welcome, guest</span>
              </p>
              <p>How Can I Help You Today</p>
            </div>

            <div className="cards">
              <div className="card">
                <p>Suggest beautiful places to see on an upcoming road trip</p>
                <img src={assets.compass_icon} alt="compass image" />
              </div>

              <div className="card">
                <p>Briefly summarize this concept urban planning</p>
                <img src={assets.bulb_icon} alt="bulb image" />
              </div>

              <div className="card">
                <p>Suggest beautiful places to see on an upcoming road trip</p>
                <img src={assets.message_icon} alt="message image" />
              </div>

              <div className="card">
                <p>Suggest beautiful places to see on an upcoming road trip</p>
                <img src={assets.code_icon} alt="code image" />
              </div>
            </div>
          </>
        ) : (
          <div className="result">
            <div className="result-title">
              <img src={assets.user_icon} alt="" />
              <p>{recentPrompt}</p>
            </div>
            <div className="result-data">
              <img src={assets.gemini_icon} alt="" />
              {loading ? (
                <div className="loader">
                  <hr />
                  <hr />
                  <hr />
                </div>
              ) : (
                <p dangerouslySetInnerHTML={{ __html: resultData }}></p>
              )}
            </div>
          </div>
        )}

        <div className="main-bottom">
          <div className="search-box">
            <input
              type="text"
              placeholder="Enter a prompt here "
              onChange={(e) => setInput(e.target.value)}
              value={input}
            />
            <div className="icons">
              <img src={assets.gallery_icon} alt="" />
              <img src={assets.mic_icon} alt="" />
              <img src={assets.send_icon} alt="" onClick={() => onSent()} />
            </div>
          </div>
          <p className="bottom-info">
            Gemini may display inaccurate info, including about people, so
            double-check its responses. Your privacy and Gemini Apps
          </p>
        </div>
      </div>
    </main>
  );
};

export default Main;
