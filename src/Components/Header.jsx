const Header = () => {
    const headerStyle = {
        backgroundColor: 'white',
        padding: '20px',
        textAlign: 'center',
        borderRadius: '5px'
    }

    const titleStyle = {
        margin: '0',
        fontSize: '24px',
        color: '#B03060'
    }

    return(
        <header style={headerStyle}>
            <h1 style={titleStyle}>First System</h1>
        </header>
    );
};
export default Header;