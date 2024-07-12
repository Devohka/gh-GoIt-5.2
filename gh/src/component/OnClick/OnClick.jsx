const OnClick = (text) => {
    function click() {
        console.log('console!');
      }
    return (
        <button type="button" onclick={click}>{text.content}</button>
    );
};

export default OnClick;