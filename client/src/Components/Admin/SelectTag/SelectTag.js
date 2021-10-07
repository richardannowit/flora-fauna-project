import React, {useEffect, useState} from 'react'
import $ from 'jquery'
import './SelectTag.scss'

export default function SelectTag(props) {
    const [item, setItem] = useState(props.default)
    const [option, setOption] = useState([])
    const mapOption = ()=> {
        return (
            option.map((elm, idx)=>{
                return <li id_option={elm.id_option} key={idx} value={elm.value} className='select-option-item' onClick={changeOption}>{elm.value}</li>
            })
        )
    } 

    const changeOption = (e)=>{
        setItem(e.target.value)
        props.onSubmit(e.target.value)
    }

    const handleClickItem = ()=>{
        $('.select-tag .select-option').stop().slideToggle(400)
        const height = $('.select-tag .select-option').height()
        $('.select-tag .select-items .select-tag-icon').css('transform', `rotateZ(${height > 10 ? 90:-90}deg)`)
    }

    useEffect(()=>{
        (async function(){
            const {onSubmit, year} = props
            onSubmit(item)
            setOption(year)
            $('.select-tag .select-option').hide()
            $('body').click((e)=>{
                 if(!e.target.classList.value.match(/select-items/)){
                     $('.select-tag .select-option').slideUp(400)
                     $('.select-tag .select-items .select-tag-icon').css('transform', 'rotateZ(90deg)')
                 }
            })
        })()
    },[]) 

    return (
        <div className='select-tag'>
            <div className='select-items' onClick={handleClickItem}>
                <p className='select-tag-title'>{item}</p>
                <i className='fas fa-chevron-right select-tag-icon'></i>
            </div>
            <div className='select-option'>
                <ul>
                    {mapOption()}
                </ul>
            </div>
        </div>
    )
}