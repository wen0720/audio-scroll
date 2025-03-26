import { createRoot } from 'react-dom/client';
import styled from 'styled-components';
import { useAudioScroll } from '../src/react/hooks/useAudioScroll.js';

const Section = styled.section`
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
`;

const TestSection1 = () => {
  const {
    topEntryRef,
    bottomEntryRef,
    isPlaying,
    toggleMute,
    isMuted
  } = useAudioScroll({
    path: 'https://storytelling-storage.twreporter.org/files/cafe-music-0417-7n87gToMulIAwpW4EC0.mp3',
  });

  return (
    <Section>
      <div style={{height: '50vh'}}></div>
      <button
        onClick={toggleMute}>{ isMuted ? '請同意聲音自動播放' : '關閉聲音自動播放'}</button>
      <img src="https://www.twreporter.org/images/20250304145437-39b511e03e6b2a1042813440ac43d35c-desktop.jpg" width="100%"></img>
      <h2>
        汙鄰居密度為全台之最
      </h2>
      <p>
        新年剛過，觀音工業區又發生火災。
      </p>
      <h2>{isPlaying ? '播放中' : '暫停中'}</h2>
      <p>
        1月5日中午，桃園市消防局接獲通報，觀音工業區內的先豐通訊公司印刷電路板（PCB）工廠發生火警，現場不斷冒出濃濃黑煙且飄出陣陣惡臭，由於廠房內存放硝酸、硫酸等大量毒化物，消防員到場後不敢大意，只能先控制住火勢，大火足足燒了3天，到8日上午才完全撲滅。
      </p>
      {/* 聲音開始播方進入點 */}
      <div ref={topEntryRef} style={{border: '1px solid red'}}></div>
      <p>
        所幸廠區第一時間疏散員工，並無人員傷亡，桃園市環保局也緊急派員到場連續3天進行空品監測，雖然監測值結果仍在安全範圍內，但環保局還是提醒下風處民眾緊閉門窗、減少外出，若需外出也應配戴口罩。
      </p>
      <p>
        這並不是先豐通訊第一次出狀況，攤開往年裁罰資料，先豐PCB廠從2018年迄今四度違反《空氣汙染防制法》（簡稱《空汙法》），合計遭裁罰40萬元，其中違規樣態包含違反固定汙染源操作許可、設備破損導致廢氣逸散、鹽酸桶槽止屑墊故障導致鹽酸氣體洩漏等情況。
      </p>
      <p>
        事實上，先豐公司僅是諸多的違規廠商之一，類似情況在觀音工業區屢見不鮮。其中，隸屬遠東集團的遠東新世紀觀音化學纖維廠在2021年三度因粒狀汙染物超標遭罰35萬；集團另一家子公司亞東石化觀音廠從2018年到2021年也累計違反《空汙法》5次，合計遭裁罰金額達135萬，其中多次是廠區的異味濃度超標，最嚴重的一次曾超標達20倍以上。
      </p>
      <img src="https://www.twreporter.org/images/20250305094434-e3700c13a2f8220de7cd0bd5bb23733c-desktop.jpg"
        width="100%" height="auto"
        style={{maxWidth: '700px'}}></img>
      {/* 聲音暫停播方進入點 */}
      <div ref={bottomEntryRef} style={{border: '1px solid red'}}></div>
      {/* 聲音開啟／關閉按鈕 */}
      <button className="fixed-audio-play-button2"
        onClick={toggleMute}>
        {
          isMuted
          ? <svg width="50" height="50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
            <rect x="15" y="35" width="20" height="30" rx="2" fill="#4A4A4A"/>
            <path d="M35,35 L55,20 L55,80 L35,65 Z" fill="#4A4A4A"/>
            <line x1="65" y1="30" x2="45" y2="70" stroke="#E74C3C" strokeWidth="4"/>
            <line x1="45" y1="30" x2="65" y2="70" stroke="#E74C3C" strokeWidth="4"/>
          </svg>
          : <svg width="50" height="50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
            <rect x="15" y="35" width="20" height="30" rx="2" fill="#4A4A4A"/>
            <path d="M35,35 L55,20 L55,80 L35,65 Z" fill="#4A4A4A"/>
          </svg>
        }
      </button>
      <div style={{height: '100vh'}}></div>
    </Section>
  );
};

const TestSection2 = () => {
  const {
    topEntryRef,
    bottomEntryRef,
    isPlaying,
    toggleMute,
    isMuted
  } = useAudioScroll({
    path: 'https://storytelling-storage.twreporter.org/files/cafe-music-0417-7n87gToMulIAwpW4EC0.mp3',
  });

  return (
    <Section>
      <button
        onClick={toggleMute}>{ isMuted ? '請同意聲音自動播放' : '關閉聲音自動播放'}</button>
      <img src="https://www.twreporter.org/images/20250304145437-39b511e03e6b2a1042813440ac43d35c-desktop.jpg" width="100%"></img>
      <h2>
        桃園樹林國小：與觀音工業區為鄰，空汙鄰居密度為全台之最
      </h2>
      <p>
        為了石門水庫而遷村、又遭工業區汙染的樹林新村
      </p>
      <h2>{isPlaying ? '播放中' : '暫停中'}</h2>
      {/* 聲音開始播方進入點 */}
      <div ref={topEntryRef} style={{border: '1px solid red'}}></div>
      <p>
        從西部濱海公路轉進觀音工業區的忠孝路旁，會看見一處高聳大型牌樓，上面寫著「四十九年六月石門水庫移民新村 陳誠題」，經過牌樓後在新村路右轉，沿路有許多鐵皮工廠、還有很多大貨車與化學槽車進進出出，前方三福氣體兩座五層樓高的大型化學儲槽相當搶眼，再往前走就是樹林國小。
      </p>
      <p>
        樹林國小的校史，可謂是台灣經濟發展的縮影。1950年代，政府為了滿足發電與用水需求，在大漢溪上游興建石門水庫，並將當時居住在水庫區上游的居民強制遷移到草漯一帶安置，組成石門水庫移民新村「樹林新村」，隨後在1960年設立樹林國小。
      </p>
      {/* 聲音暫停播方進入點 */}
      <div ref={bottomEntryRef} style={{border: '1px solid red'}}></div>
      {/* 聲音開啟／關閉按鈕 */}
      <button className="fixed-audio-play-button2"
        onClick={toggleMute}>
        {
          isMuted
          ? <svg width="50" height="50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
            <rect x="15" y="35" width="20" height="30" rx="2" fill="#4A4A4A"/>
            <path d="M35,35 L55,20 L55,80 L35,65 Z" fill="#4A4A4A"/>
            <line x1="65" y1="30" x2="45" y2="70" stroke="#E74C3C" strokeWidth="4"/>
            <line x1="45" y1="30" x2="65" y2="70" stroke="#E74C3C" strokeWidth="4"/>
          </svg>
          : <svg width="50" height="50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
            <rect x="15" y="35" width="20" height="30" rx="2" fill="#4A4A4A"/>
            <path d="M35,35 L55,20 L55,80 L35,65 Z" fill="#4A4A4A"/>
          </svg>
        }
      </button>
      <div style={{height: '50vh'}}></div>
    </Section>
  );
};

const App = () => {
  return (
    <>
      <TestSection1 />
      <TestSection2 />
    </>
  );
};

const root = createRoot(document.getElementById('root'));
root.render(<App />);
