import './Header.css';

const Header = () => {
  return (
    <div className="header">
      <div className="container">
        <div className="header-top">
          <h2 className="logo">My        shop</h2>
          <div className="search-box">
            <input className="search-input" placeholder="나만을 위한 특별한 가전찾기" />
            <div className="top-icon">🔍</div>
          </div>
        <ul className='top-menu'>
            <li><a href='/mypage'>마이페이지</a></li>
            <li><a href='/cart'>장바구니</a></li>
            <li><a href='/tracking'>배송조회</a></li>
            <li><a href='/login'>로그인</a></li>
        </ul>
        
        </div>
      </div>

      <div className="main-nav">
        <div className="container">
          <nav className="main-menu">
            
            <li className="main-item">
            <a href="/cellphone">휴대폰 구매</a>
                <ul className="submenu">
                    <li><a href='/cellphone/galaxy'>갤럭시</a></li>
                    <li><a href='/cellphone/iphone'>아이폰</a></li>
                    <li><a href='/cellphone/lg'>LG</a></li>
                </ul>
            </li>
          
            <li className="main-item">
            <a href="/tv">TV/오디오</a>
                <ul className="submenu">
                    <li><a href='/tv/galaxy'>TV</a></li>
                    <li><a href='/tv/iphone'>Audio</a></li>
                </ul>
            </li>
          
            
            <li className="main-item">
            <a href="/pc">PC</a>
            <ul className="submenu">
                <li><a href='/PC/desktop'>데스크탑</a></li>
                <li><a href='/PC/notebook'>노트북</a></li>
                <li><a href='/PC/gaming'>게이밍</a></li>
                <li><a href='/PC/printer'>프린터</a></li>
            </ul>
            </li>
            <li className="main-item">
            <a href="/moblie">모바일</a>
                <ul className="submenu">
                    <li><a href='/moblie/tablet'>태블릿</a></li>
                    <li><a href='/moblie/wearable'>웨어러블</a></li>
                    <li><a href='/moblie/accessory'>악세서리</a></li>
                </ul>
            </li>
            <li className="main-item">
            <a href="/kitchen">주방가전</a>
                <ul className="submenu">
                    <li><a href='/kitchen/showcase'>냉장고</a></li>
                    <li><a href='/kitchen/waterpurifier'>정수기</a></li>
                    <li><a href='/kitchen/microwave'>전자레인지</a></li>
                    <li><a href='/kitchen/etc'>기타</a></li>
                </ul>
            </li>
            <li className="main-item">
            <a href="/life">생활가전</a>
                <ul className="submenu">
                    <li><a href='/life/washingmachine'>세탁기</a></li>
                    <li><a href='/life/vacuum'>청소기</a></li>
                    <li><a href='/life/dryer'>건조기</a></li>
                    <li><a href='/life/airconditioner'>에어컨</a></li>
                    <li><a href='/life/etc'>기타</a></li>
                </ul>
            </li>
            <li className="main-item">
            <a href="/exhibition">기획전</a>
                <ul className="submenu">
                    <li><a href='/exhibition/1'>갤럭시</a></li>
                    <li><a href='/exhibition/2'>아이폰</a></li>
                    <li><a href='/exhibition/3'>LG</a></li>
                </ul>
            </li>
            <li className="main-item">
            <a href="/recommendation">추천제품</a>
                <ul className="submenu">
                    <li><a href='/recommendation/4y'>갤럭시</a></li>
                    <li><a href='/recommendation/5'>아이폰</a></li>
                    <li><a href='/recommendation/6'>LG</a></li>
                </ul>
            </li>
            <li className="main-item">
            <a href="/rental">렌탈샵</a>
                <ul className="submenu">
                    <li><a href='/rental/7'>갤럭시</a></li>
                    <li><a href='/rental/8'>아이폰</a></li>
                    <li><a href='/rental/9'>LG</a></li>
            </ul>
            </li>
            <li className="main-item">
            <a href="/internet">인터넷</a>
                <ul className="submenu">
                    <li><a href='/internet/10'>갤럭시</a></li>
                    <li><a href='/internet/11'>아이폰</a></li>
                    <li><a href='/internet/12'>LG</a></li>
                </ul>
            </li>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Header;
