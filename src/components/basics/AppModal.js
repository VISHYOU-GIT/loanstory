
export default function AppModal({ children, shown, close, modalShown }) {
console.log('modalShown',modalShown)
  return shown == modalShown ? (
    <div
      style={{ zIndex: "10000000000" }}
      className="modal-backdrop"
      onClick={() => {
        // close modal when outside of modal is clicked
        close();
      }}
    >
      <div
      style={{width: '30%'}}
        className={`bg_module modal_slide relative modal-content bg-dark h-fit p-5`}
        onClick={(e) => {
          // do not close modal if anything inside modal content is clicked
          e.stopPropagation();
        }}
      >
        {/* <button
          className="mx-auto pt-5 flex justify-center align-items-center"
          onClick={() => {
            close();
          }}
        >
          <MdClose
            style={{
              border: "3px solid #5C5C5C",
              borderRadius: "50%",
              color: "#5C5C5C",
            }}
            size="40px"
          />
        </button> */}
        {children}
      </div>
    </div>
  ) : null;
}
