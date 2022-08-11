import React from "react";

class Note extends React.Component {
    render() {
        return (
            <div className="col col-lg-6 col-12 mb-3">
                <div className="card note-card" >
                    <div className="card-body">
                        <h5 className="card-title note-title fs-5 text-start">{this.props.title}</h5>
                        <p className="note-date mb-2 fs-6 text-start">{this.props.createdAt}</p>
                        <p className="note-detail card-text text-start overflow-auto">{this.props.body}</p>
                        <div className="row">
                            <div className="col">
                                {
                                    this.props.archived === true ? (
                                        <button type="button" className="btn btn-outline-success" onClick={() => this.props.onUndoArchive(this.props.id)}>Pindahkan</button>
                                    ) : (
                                        <button type="button" className="btn btn-outline-success" onClick={() => this.props.onArchive(this.props.id)}>Arsipkan</button>
                                    )
                                }
                            </div>
                            <div className="col">
                                <button type="button" className="btn btn-outline-danger" onClick={() => this.props.onDelete(this.props.id, this.props.archived)}>Hapus</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Note;