import './App.css'
export function TwitterCard ({formatUserName, userName, name, isFollowing}){
    const imageSrc = `https://unavatar.io/${userName}`
    return (
        <article className="tw-followCard">
            <header className='tw-followCard-header'>
                <img 
                    className='tw-followCard-avatar'
                    alt='El avatar de midudev'
                    src={imageSrc} />
                <div className='tw-followCard-info'>
                    <strong>{name}</strong>
                    <span
                        className='tw-followCard-infoUserName'>{formatUserName(userName)}
                    </span>
                </div>
            </header>

            <aside>
                <button
                    className='tw-followCard-button'
                    type="button">Seguir</button>
            </aside>
        </article>
    )
}
