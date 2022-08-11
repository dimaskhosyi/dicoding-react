import * as React from 'react';

class NotesHeader extends React.Component {
    render() {
        return (
            <header className="navbar header-background">
                <div className="container-fluid align-middle">
                    <h3 className='header-heading'>Aplikasi Catatan</h3>
                    <nav className="d-flex">
                        <input className="form-control me-2" type="search" placeholder="Cari catatan" aria-label="Search" onChange={this.props.onSearchHandler} />
                    </nav>
                </div>
            </header>
        )
    }
}

export default NotesHeader