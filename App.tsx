
import React, { useState } from 'react';
import { ShapeId, Stage } from './types';
import { SHAPES, RANK_CONFIG, LINE_LINK } from './constants';

const App: React.FC = () => {
  const [stage, setStage] = useState<Stage>('intro');
  const [selection, setSelection] = useState<ShapeId[]>([]);

  // 夢幻色調配置
  const primaryColor = "#8e94f2"; // 夢幻紫
  const secondaryColor = "#f4b0d7"; // 晨曦粉
  const textColor = "#5a5d8f"; // 主標題深藍紫色

  // 本地預設療癒文案
  const LOCAL_HEALING_ADVICE: Record<ShapeId, string> = {
    circle: "在圓的寂靜中，你找到了守護自我的力量。那是一份不需外求的圓滿，讓你在世界的喧囂中，依然擁有一片純淨的覺察之境。",
    triangle: "三角形的尖端指引著清晰的彼方。當你的志向與行動交匯，內在的指針便不再搖擺。這份對理想的專注，正溫柔地鋪就通往未來的路。",
    square: "方形的穩定是你最堅實的依靠。在真實與誠懇的質地裡，你種下了信任的種子。這份安穩的覺察，正支撐著你一步步走向完整的自我。",
    spiral: "螺旋的曲線是生命跳動的韻律。不畏懼未知的轉彎，因為每一次的旋繞都是向上攀升的成長。在這場不斷蜕變的覺察中，你正與全新的自己相遇。",
    cross: "十字的交點是靈魂與世界的共鳴。在給予與連結的流動中，你發現了生命更深層的意義。這份溫溫的覺察，正引領你在人際的座標中定位出愛的位置。"
  };

  const getSoulNumber = (sel: ShapeId[]): string => {
    if (sel.length < 5) return "000";
    const baseOrder: ShapeId[] = ['circle', 'triangle', 'square', 'spiral', 'cross'];
    let index = 0;
    const remaining = [...baseOrder];
    const factorials = [24, 6, 2, 1, 0];
    for (let i = 0; i < 4; i++) {
      const pos = remaining.indexOf(sel[i]);
      index += pos * factorials[i];
      remaining.splice(pos, 1);
    }
    return (index + 1).toString().padStart(3, '0');
  };

  const soulNumber = getSoulNumber(selection);

  const handleShapeClick = (id: ShapeId) => {
    if (selection.includes(id)) {
      setSelection(selection.filter(s => s !== id));
    } else if (selection.length < 5) {
      setSelection([...selection, id]);
    }
  };

  const resetTest = () => {
    setSelection([]);
    setStage('intro');
  };

  // 夢幻發光植物裝飾
  const DreamyBotanical = () => (
    <>
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-white rounded-full animate-pulse shadow-[0_0_8px_white]"></div>
        <div className="absolute bottom-1/4 right-1/4 w-1 h-1 bg-white rounded-full animate-pulse delay-1000 shadow-[0_0_8px_white]"></div>
      </div>
      <div className="absolute -top-6 -left-6 w-40 h-40 opacity-30 rotate-12 pointer-events-none">
        <svg viewBox="0 0 100 100" fill="none" stroke="url(#leafGradient)" strokeWidth="1.2">
          <defs>
            <linearGradient id="leafGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#8e94f2" />
              <stop offset="100%" stopColor="#f4b0d7" />
            </linearGradient>
          </defs>
          <path d="M5,95 Q25,65 5,15 M5,95 Q45,75 75,90 M25,70 Q45,50 40,20" strokeLinecap="round" />
        </svg>
      </div>
    </>
  );

  return (
    <div className="min-h-screen bg-[#f8f9ff] flex flex-col items-center p-4 md:p-8 overflow-x-hidden">
      <div className="max-w-xl w-full">
        <header className="text-center mb-12">
          <span 
            className="font-bold text-center block uppercase" 
            style={{
              fontSize: '24px',
              color: '#b0b4d4',
              letterSpacing: '0.8em',
              marginBottom: '12px',
              paddingLeft: '0.8em' // 補償末尾字距達成絕對居中
            }}
          >
            2026
          </span>
          <h1 
            className="text-[36px] md:text-[48px] font-bold tracking-[0.2em] mb-4" 
            style={{ 
              color: textColor, 
              fontFamily: "'Noto Sans TC', sans-serif",
              lineHeight: '1.2'
            }}
          >
            靈魂圖像代碼
          </h1>
          <p className="text-[#a5a9d6] font-light tracking-[0.3em] text-[10px] uppercase">Aura Discovery ‧ Inner Vision</p>
        </header>

        {stage === 'intro' && (
          <div className="bg-white/80 backdrop-blur-md rounded-[2.5rem] shadow-[0_20px_50px_rgba(142,148,242,0.1)] p-10 text-center border border-white animate-in fade-in slide-in-from-bottom-4 duration-1000">
            <div className="mb-8 flex justify-center gap-4">
              {SHAPES.map(s => (
                <div key={s.id} className={`w-10 h-10 rounded-full bg-gradient-to-tr from-white to-[#f3f5ff] shadow-sm flex items-center justify-center p-2.5 ${s.color.split(' ')[1]}/40`}>
                   {s.icon}
                </div>
              ))}
            </div>
            <h2 className="text-2xl font-medium text-[#5a5d8f] mb-6">直覺圖像測驗<br/><span className="text-lg opacity-60">覺察 2026 的內在動能</span></h2>
            <div className="text-[#8c91b5] mb-10 leading-relaxed font-light px-2 space-y-4 text-sm">
              <p>這不僅是一次測驗，更是一場關於圖像投射的潛意識覺察。</p>
              <p>請依照你的「直覺喜好度」進行排序：</p>
              <p className="font-medium text-[#8e94f2]">將此刻最吸引你的圖像放在第 1 名<br/>最無感的放在第 5 名</p>
            </div>
            <button
              onClick={() => setStage('sorting')}
              style={{ background: `linear-gradient(135deg, ${primaryColor}, ${secondaryColor})` }}
              className="text-white px-14 py-4 rounded-full font-bold hover:scale-105 transition-all active:scale-95 shadow-[0_10px_25px_rgba(142,148,242,0.4)]"
            >
              開啟內在探尋
            </button>
          </div>
        )}

        {stage === 'sorting' && (
          <div className="animate-in fade-in zoom-in-95 duration-500">
            <div className="bg-white/90 backdrop-blur-xl rounded-[2.5rem] shadow-xl p-8 border border-white mb-6">
              <div className="text-center mb-10">
                <span className="bg-[#f3f5ff] text-[#8e94f2] px-6 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest border border-[#8e94f2]/10">
                  直覺圖像排序測驗
                </span>
                <p className="mt-6 text-[#7c82ab] font-light text-sm">
                  {selection.length === 5 ? "投射完成，能量已凝聚" : `請依直覺「喜好程度」依序點選圖形 (${selection.length + 1}/5)`}
                </p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-12">
                {SHAPES.map((shape) => {
                  const rank = selection.indexOf(shape.id) + 1;
                  const isSelected = rank > 0;
                  return (
                    <button
                      key={shape.id}
                      onClick={() => handleShapeClick(shape.id)}
                      className={`relative aspect-square rounded-[2rem] p-6 transition-all duration-500 flex flex-col items-center justify-center border-2 
                        ${isSelected 
                          ? `bg-white border-[${shape.color.split(' ')[1].replace('text-', '')}] shadow-[0_15px_30px_rgba(0,0,0,0.05)] scale-95` 
                          : 'bg-[#fafaff] border-transparent hover:bg-white hover:border-[#8e94f2]/20'
                        }`}
                    >
                      <div className={`w-14 h-14 md:w-16 md:h-16 transition-all duration-500 ${isSelected ? 'opacity-10 blur-[2px]' : shape.color.split(' ')[1]}`}>
                        {shape.icon}
                      </div>
                      {isSelected && (
                        <div className="absolute inset-0 flex items-center justify-center">
                          <span className="text-5xl font-bold italic" style={{ color: primaryColor }}>{rank}</span>
                        </div>
                      )}
                      <span className="mt-4 text-[10px] font-bold text-[#b0b4d4] tracking-widest uppercase">{shape.name}</span>
                    </button>
                  );
                })}
              </div>

              <div className="flex flex-col gap-4">
                <button
                  disabled={selection.length < 5}
                  onClick={() => setStage('result')}
                  style={{ 
                    background: selection.length === 5 
                      ? `linear-gradient(135deg, ${primaryColor}, ${secondaryColor})` 
                      : '#e0e3f0' 
                  }}
                  className={`w-full py-5 rounded-full font-bold transition-all shadow-lg text-white text-lg
                    ${selection.length === 5 ? 'hover:brightness-105 active:scale-[0.98]' : 'cursor-not-allowed'}`}
                >
                  產生內在探索報告
                </button>
                <button onClick={() => setSelection([])} className="w-full py-2 text-[#b0b4d4] text-[10px] hover:text-[#8e94f2] transition-colors uppercase tracking-[0.3em]">
                  Reset / 重新排序
                </button>
              </div>
            </div>
          </div>
        )}

        {stage === 'result' && (
          <div className="animate-in fade-in duration-1000 space-y-8 pb-16">
            <div className="relative overflow-hidden rounded-[3rem] p-14 text-center shadow-2xl border border-white/80 group">
               <div className="absolute inset-0 bg-gradient-to-br from-[#e0e7ff] via-[#f8e1f4] to-[#e0e7ff] opacity-90"></div>
               <DreamyBotanical />
               <div className="absolute inset-6 border border-white/40 rounded-[2.5rem] pointer-events-none"></div>
               <span className="text-[#8e94f2] text-[10px] font-bold tracking-[0.5em] uppercase mb-8 block relative z-10 opacity-70">您的專屬靈魂代碼</span>
               <div className="relative z-10 inline-block mb-8">
                  <div className="absolute inset-0 bg-white/40 blur-3xl rounded-full scale-150 animate-pulse"></div>
                  <div className="relative px-12 py-8 border border-white/50 rounded-3xl bg-white/20 backdrop-blur-md shadow-inner">
                    <div className="text-8xl md:text-9xl font-serif font-bold text-[#7a81e0] tracking-tighter">
                        {soulNumber}
                    </div>
                  </div>
               </div>
               <p className="text-[#8e94f2] text-sm italic font-light relative z-10 max-w-[320px] mx-auto opacity-80">
                  圖像比文字更能真實映照出潛意識，<br />開啟覺察內在的探索旅程
               </p>
            </div>

            <div className="bg-white/60 backdrop-blur-lg rounded-[2.5rem] p-10 text-center border border-white shadow-[0_15px_35px_rgba(142,148,242,0.1)]">
              <h3 className="font-bold mb-6 text-[10px] uppercase tracking-[0.3em] text-[#8e94f2]">來自內在的圖像密語</h3>
              <p className="italic font-light leading-relaxed text-xl px-4 text-[#7a81e0]">
                「{LOCAL_HEALING_ADVICE[selection[0]]}」
              </p>
            </div>

            <div className="space-y-6">
              {selection.map((shapeId, index) => {
                const config = RANK_CONFIG[index];
                const shape = SHAPES.find(s => s.id === shapeId)!;
                const isLocked = index > 0;
                return (
                  <div 
                    key={index} 
                    className={`bg-white/70 backdrop-blur-md rounded-[2rem] p-7 border transition-all duration-700 relative overflow-hidden
                      ${isLocked ? 'border-white/50 opacity-90' : 'border-[#8e94f2] shadow-xl scale-[1.02]'}
                    `}
                    style={{ borderColor: isLocked ? undefined : primaryColor }}
                  >
                    <div className="flex items-start gap-6">
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg shrink-0
                        ${isLocked ? 'bg-white text-[#b0b4d4]' : 'text-white'}`}
                        style={{ background: isLocked ? undefined : `linear-gradient(135deg, ${primaryColor}, ${secondaryColor})` }}
                      >
                        {index + 1}
                      </div>
                      <div className="flex-1">
                        <h4 className={`text-lg font-bold tracking-wide ${isLocked ? 'text-[#8a8fa3]' : 'text-[#5a5d8f]'}`}>
                          {config.title}
                        </h4>
                        <div className={`mt-4 flex items-center gap-5 transition-all duration-1000 ${isLocked ? 'blur-locked' : ''}`}>
                          <div className={`w-10 h-10 ${isLocked ? 'text-[#b0b4d4]' : shape.color.split(' ')[1]}`}>
                            {shape.icon}
                          </div>
                          <div className="flex flex-col">
                            <span className="text-[9px] text-[#b0b4d4] font-bold uppercase tracking-widest mb-1">{shape.name}</span>
                            <span className="text-lg font-bold text-[#5a5d8f] leading-tight">{config.mappings[shapeId]}</span>
                          </div>
                        </div>
                      </div>
                      {isLocked && (
                        <div className="absolute right-6 bottom-6 opacity-30">
                          <svg className="w-10 h-10 text-[#b0b4d4]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                          </svg>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="bg-gradient-to-b from-white to-[#f3f5ff] rounded-[3rem] p-12 text-center border border-white shadow-2xl">
              <h3 className="text-2xl font-bold mb-6 mt-6" style={{ color: textColor }}>開啟 2026 的內在探尋</h3>
              <p className="text-[#8c91b5] text-sm mb-10 leading-relaxed font-light">
                此刻的覺察，已在潛意識播下種子。<br />
                完整的「2026 靈魂圖像報告」將為你解讀：<br />
                那些隱藏在排名背後，你的天賦、狀態、動力與內在覺察。<br />
                傳送靈魂代碼到居筆官方line，讓我們陪伴你開啟這段旅程。
              </p>
              <div className="bg-white/80 backdrop-blur-sm py-5 px-10 rounded-[2rem] border border-[#8e94f2]/10 mb-10 inline-block">
                <span className="text-[9px] text-[#b0b4d4] block mb-2 uppercase tracking-[0.4em]">Inner ID</span>
                <span className="text-4xl font-mono font-bold tracking-wider text-[#7a81e0]">{soulNumber}</span>
              </div>
              <a
                href={`${LINE_LINK}?text=我的靈魂代碼是：${soulNumber}，我想開啟 2026 深度覺察報告！`}
                target="_blank"
                rel="noopener noreferrer"
                style={{ background: `linear-gradient(135deg, ${primaryColor}, ${secondaryColor})` }}
                className="flex items-center justify-center gap-3 text-white w-full py-5 rounded-full font-bold text-lg hover:brightness-105 transition-all active:scale-[0.98] shadow-[0_15px_30px_rgba(142,148,242,0.3)]"
              >
                前往居筆 Line@ 免費獲取完整報告
              </a>
            </div>

            <button onClick={resetTest} className="w-full text-[#b0b4d4] text-xs py-4 hover:text-[#8e94f2] transition-colors underline underline-offset-8 decoration-[#8e94f2]/20">
              ← 返回起點重新感受
            </button>
          </div>
        )}
      </div>

      <footer className="mt-auto py-12 text-[#b0b4d4] text-[9px] font-light tracking-[0.5em] text-center uppercase">
        © 2026 Jubie 居筆內在繪畫解讀工作室
      </footer>
    </div>
  );
};

export default App;
