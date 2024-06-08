import IconButton from './IconButton'
export default function ConfirmationModal({ modalData }) {
  return (
    <div className="fixed inset-0 z-[1000] !mt-0 grid place-items-center overflow-auto bg-white bg-opacity-10 backdrop-blur-sm">
      <div className="w-11/12 max-w-[350px] rounded-lg border border-slate-400 bg-richblack-800 p-6">
        <p className="text-2xl font-semibold text-richblack-5">
          {modalData?.text1}
        </p>
        <p className="mt-3 mb-5 leading-6 text-slsate-200">
          {modalData?.text2}
        </p>
        <div className="flex items-center gap-x-4">
        <IconButton
            onClick={modalData.btn1Handler}
            text={modalData.btn1Text}
            />
          <button
            className="cursor-pointer rounded-md bg-slate-300 p-1 px-2 font-semibold text-slate-900 hover:scale-105 transition-all"
            onClick={modalData?.btn2Handler}
          >
            {modalData?.btn2Text}
          </button>
        </div>
      </div>
    </div>
  )
}
