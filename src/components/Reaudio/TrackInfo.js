import React, { Fragment } from 'react'

const TrackInfo = ({ trackName, trackArtist, trackImage }) => {
    return (
        <div className="track-info">
            <div className="info-wrap">
                <span className="track-name">{trackName}</span>
                {trackArtist && (
                    <Fragment>
                        <span className="track-divider">&nbsp; - &nbsp;</span>
                        <span className="track-artist">{trackArtist}</span>
                    </Fragment>
                )}
            </div>
        </div>
    )
}

export default TrackInfo
