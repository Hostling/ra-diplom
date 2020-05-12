import React from 'react';

const FooterPay = (props) => {
  return (
    <div className="col">
      <section>
        <h5>Принимаем к оплате:</h5>
        <div className="footer-pay">
          <div className="footer-pay-systems footer-pay-systems-paypal"></div>
          <div className="footer-pay-systems footer-pay-systems-master-card"></div>
          <div className="footer-pay-systems footer-pay-systems-yandex"></div>
          <div className="footer-pay-systems footer-pay-systems-visa"></div>
          <div className="footer-pay-systems footer-pay-systems-webmoney"></div>
          <div className="footer-pay-systems footer-pay-systems-qiwi"></div>
        </div>
      </section>
      <section>
        <div className="footer-copyright">
          <p>
            2009-2020 © BosaNoga.ru — модный интернет-магазин обуви и
            аксессуаров. Все права защищены.
          </p>
          <span>Доставка по всей России!</span>
        </div>
      </section>
    </div>
  )
}

export default FooterPay
