import React from 'react'
import $ from 'jquery'
import './SelectTag.scss'

class SelectTag extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            item: 0,
            optionYear: []
        }
    }

    mapOption = ()=> {
        return (
            this.state.optionYear.map((elm, idx)=>{
                return <li key={idx} data-value={elm} className='select-option-item' onClick={this.changeOption}>{elm}</li>
            })
        )
    } 

    changeOption = async (e)=>{
        const {onSubmit} = this.props
        await this.setState({item: e.target.dataset.value})
        onSubmit(this.state.item)
    }

    handleClickItem = ()=>{
        $('.select-tag .select-option').stop().slideToggle(400)
        const height = $('.select-tag .select-option').height()
        $('.select-tag .select-items .select-tag-icon').css('transform', `rotateZ(${height > 10 ? 90:-90}deg)`)
    }

    async componentDidMount() {
        const {onSubmit} = this.props
        this.setState({optionYear: this.props.option})
        await this.setState({item: this.props.default_value})
        onSubmit(this.state.item)
        $('.select-tag .select-option').hide()
        $('body').click((e)=>{
             if(!e.target.classList.value.match(/select-items/)){
                 $('.select-tag .select-option').slideUp(400)
                 $('.select-tag .select-items .select-tag-icon').css('transform', 'rotateZ(90deg)')
             }
        })
    }

    render() {
        return (
            <div className='select-tag'>
                <div className='select-items' onClick={this.handleClickItem}>
                    <p className='select-tag-title'>{this.state.item}</p>
                    <i className='fas fa-chevron-right select-tag-icon'></i>
                </div>
                <div className='select-option'>
                    <ul>
                        {this.mapOption()}
                    </ul>
                </div>
            </div>
        )
    }
}

export default SelectTag