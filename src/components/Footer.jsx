


const styles = {
    wrapper: {
    width: '100%',
    backgroundColor: '#212529',
    color: '#fafaf8',
  },
  footer: {
    padding: '40px 20px',
    textAlign: 'center',
    fontSize: '12px',
    lineHeight: '1.8',
  },
  container: {
    maxWidth: '1600px',
    margin: '0 auto',
  },
  topLinks: {
    marginBottom: '20px',
    fontWeight: '500',
    fontSize: '13px',
    color:'#fafaf8',
    
  },
  info: {
    marginBottom: '20px',
    fontSize: '13px',
    lineHeight: '2.0',
    color: '#fafaf8',
  },
  copy: {
    fontSize: '13px',
    color: '#fafaf8',
    padding:'30px',
  },
};

const Footer = () => {
  return (
    <div style={styles.wrapper}>
      <footer style={styles.footer}>
        <div style={styles.container}>
          <div style={styles.topLinks}>
            <a href="/terms" style={{ color: '#8e92a3', textDecoration: 'none', marginRight: '10px' }}>서비스 이용약관</a>
            <a href="/privacy" style={{ color: '#fafaf8', textDecoration: 'none' }}>개인정보처리방침</a>
          </div>
          <div style={styles.info}>
            주소: 부산광역시 중구 동광길 26, 3층 &nbsp;  &nbsp;
            대표자: 이화영 &nbsp;  &nbsp;
            법인명: 삼성스타비즈 &nbsp; &nbsp;
            연락처: 010-5745-4477 &nbsp;  &nbsp;
            사업자등록번호: 591-86-03282 &nbsp;  &nbsp;
            이메일: samsungstarbiz@naver.com &nbsp;  &nbsp;
            통신판매업신고번호: 제2024-부산중구-0257호
          </div>
          <div style={styles.copy}>
            Copyright ⓒ 삼성스타비즈 All Rights Reserved
          </div>
        </div>
      </footer>
    </div>
  );
};
export default Footer;





