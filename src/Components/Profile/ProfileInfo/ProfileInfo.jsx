import React from 'react';
import style from './ProfileInfo.module.css';
const ProfileInfo = () => {
    return  (
        <div>
        <div>
               <h3 className={style.descriptionBlock}> ava+description</h3>
        </div>
        <div className={style.descriptionBlock}>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFQ2NCajwLnOgXStUPYq_nhO3CfPlTvL44Sg&usqp=CAU'/>
        </div>

    </div>
    )
}

export default ProfileInfo;