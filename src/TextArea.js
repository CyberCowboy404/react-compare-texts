export function TextArea({ text, showTextLength, setText }) {
    const textCounter = showTextLength ? <span>{text.length}</span> : ""
    return (
        <div>
            <textarea defaultValue={text} onChange={(e) => setText(e.target.value) }/>
            {textCounter}
        </div>
    );
}