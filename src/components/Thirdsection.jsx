import './Thirdsection.css'
export default function Thirdsection () {
    return (
        <section className='third-section'>
            <article className='text'>
                <h2>
                     Search Content
                </h2>
                <h4>
                    Enter a keyword or tag to search for <br></br>contents on Akewi App.
                </h4>
            </article>
            <article className='inputs'>
                <input type="text" />
                <button>Search</button>
            </article>
        </section>
    )
}