export const SHOW_VIEW = 'SHOW_VIEW';

export function addview() {
  console.log('add');
  return {
    type: SHOW_VIEW
  };
}

export function removeView() {
  return (dispatch, getState) => {
    const { frase } = getState();

    console.log('remove');

    dispatch(addview());
  };
}
