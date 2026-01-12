import React from 'react';
import { ShapeId, ShapeInfo, RankData } from './types.ts';

export const SHAPES: ShapeInfo[] = [
  { 
    id: 'circle', 
    name: '圓形', 
    color: 'bg-rose-50 text-rose-400',
    icon: (
      <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="9" />
      </svg>
    )
  },
  { 
    id: 'triangle', 
    name: '三角形', 
    color: 'bg-teal-50 text-teal-400',
    icon: (
      <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 3L2 21H22L12 3Z" />
      </svg>
    )
  },
  { 
    id: 'square', 
    name: '正方形', 
    color: 'bg-indigo-50 text-indigo-400',
    icon: (
      <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="3" y="3" width="18" height="18" rx="2" />
      </svg>
    )
  },
  { 
    id: 'spiral', 
    name: '螺旋形', 
    color: 'bg-orange-50 text-orange-400',
    icon: (
      <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 7 12 7s-5 4-5 5 4 5 5 5 3-2.47 3-3-1-2-2-2" />
      </svg>
    )
  },
  { 
    id: 'cross', 
    name: '十字型', 
    color: 'bg-sky-50 text-sky-400',
    icon: (
      <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2V22M2 12H22" />
      </svg>
    )
  },
];

export const RANK_CONFIG: RankData[] = [
  {
    title: '第一順位：核心生命動能',
    description: '這代表你靈魂深處最迫切的渴望，也是驅動你所有行為的潛意識原動力。',
    mappings: {
      circle: '追求靈魂的絕對主導權，在獨立中守護自我邊界',
      triangle: '具備清晰的遠見與佈局，渴望掌握生命發展的羅盤',
      square: '崇尚極致的真實與誠懇，在穩定的秩序中建立內在安全感',
      spiral: '靈魂深處跳動著冒險因子，渴望透過不斷打破現狀來換取成長',
      cross: '渴望在人群中尋找共振，透過深度連結來確認自我的存在意義'
    }
  },
  {
    title: '第二順位：潛藏天賦資源',
    description: '這是你與生俱來的內在優勢，常在你最放鬆或面臨挑戰時不經意流露。',
    mappings: {
      circle: '擁有無所畏懼的獨行勇氣，能從孤獨中萃取強大的創造力',
      triangle: '具備驚人的直覺預判與洞察力，能看見事物背後隱藏的邏輯',
      square: '擁有極高密度的責任感與執行意志，是混亂環境中最可靠的定心丸',
      spiral: '具備卓越的環境適應與演化能力，總能從變動中精準捕捉轉機',
      cross: '擁有強大的共情天賦與社交磁力，能輕易化解衝突並凝聚共識'
    }
  },
  {
    title: '第三順位：當前生命狀態',
    description: '這反映了你現階段如何與世界互動，以及你目前最關注的生活層面。',
    mappings: {
      circle: '正處於重塑邊界的過程，努力在繁雜關係中切割出自由空間',
      triangle: '處於意志高度集中的攀爬期，正為了某個明確理想而全力衝刺',
      square: '正致力於修復與鞏固生活基石，追求一種踏實而無憂的平靜',
      spiral: '靈魂正處於躁動的蛻變前夕，渴望透過全新的視角打破陳舊框架',
      cross: '正積極向外投射影響力，尋求更寬廣的人際共感與社會價值認同'
    }
  },
  {
    title: '第四順位：靈魂修復能源',
    description: '當你感到疲憊或能量枯竭時，這是能讓你重新獲得支持與修復的關鍵路徑。',
    mappings: {
      circle: '徹底的獨處與封閉空間，能讓你的感官與思緒得到洗滌',
      triangle: '設立並達成一個微小的明確目標，能瞬間點燃你的成就感燃料',
      square: '規規的生活節奏與可預測的環境，能讓你的神經系統深度放鬆',
      spiral: '打破常規的新鮮體驗與知識碰撞，能喚醒你幾乎熄滅的生命熱情',
      cross: '一場具質感的深度對談或團隊歸屬感，能為你提供持久的溫度'
    }
  },
  {
    title: '第五順位：潛意識避風港（逃避區）',
    description: '這是你壓力下最想躲開的事物，也可能是你目前生命中最不敢直視的陰影。',
    mappings: {
      circle: '恐懼失去掌控權，將任何形式的「依賴他人」視為靈魂束縛',
      triangle: '害怕願景僅是空洞理想，刻意無視那些不完美的現實節點',
      square: '對無預警的責任承擔感到沈重壓力，擔憂失去原有的自我節奏',
      spiral: '在渴望改變的同時，內心深處其實恐懼著一旦邁出就無法回頭',
      cross: '對低質量的無意義社交感到乾涸，正試圖逃離透支的人際偽裝'
    }
  }
];

export const LINE_LINK = "https://lin.ee/veQopyH";