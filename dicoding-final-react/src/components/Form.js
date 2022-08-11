import React from "react";

class Form extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            title: '',
            body: '',
            archived: ''
        }

        this.onTitleChange = this.onTitleChange.bind(this)
        this.onBodyChange = this.onBodyChange.bind(this)
        this.onArchiveChange = this.onArchiveChange.bind(this)
        this.onSubmiteHandler = this.onSubmiteHandler.bind(this)
    }

    onTitleChange(e) {
        this.setState(() => {
            return { title: e.target.value.slice(0, 50) }
        })
    }

    onBodyChange(e) {
        this.setState(() => {
            return {
                body: e.target.value
            }
        })
    }

    onArchiveChange(e) {
        this.setState(() => {
            return {
                archived: e.target.checked
            }
        })
    }

    onSubmiteHandler(e) {
        e.preventDefault()
        this.props.addNotes(this.state)
    }

    render() {
        return (
            <div className="form-layout">
                <form onSubmit={this.onSubmiteHandler}>
                    <h4 className="mb-3">Buat Catatan</h4>
                    <div className="mb-3">
                        <div className="row">
                            <label htmlFor="judulCatatan" className="col">Judul Catatan</label>
                            <p className="col fs-6 text fw-light m-0 text-end">Sisa Karakter: {this.state.title.length}/50</p>
                        </div>
                        <input type="text" className="form-control" id="judulCatatan" placeholder="Tuliskan judul" value={this.state.title} onChange={this.onTitleChange} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="catatan">Detail Catatan</label>
                        <textarea className="form-control" placeholder="Tuliskan ceritamu" id="catatan" value={this.state.body} onChange={this.onBodyChange} ></textarea>
                    </div>
                    <div className="mb-3 form-check">
                        <input type="checkbox" className="form-check-input" id="archive" value={this.state.archive} onChange={this.onArchiveChange} />
                        <label className="form-check-label" htmlFor="archive">Arsipkan catatan</label>
                    </div>
                    <button type="submit" className="btn form-button">Submit</button>
                </form>
            </div>
        )
    }
}

export default Form