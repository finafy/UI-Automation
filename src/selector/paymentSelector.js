export const paymentSelector = {
    paymentWithVAWidget : bank => `//*[@data-testid = '${bank}']`,
    paymentButton : `//*[@data-testid = 'paymentPayButton']`,
};
  