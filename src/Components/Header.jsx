const Header = () => {
    const headerStyle = {
        backgroundColor: '#B03060',
        padding: '20px',
        textAlign: 'center',
        borderRadius: '5px'
    }

    const titleStyle = {
        margin: '0',
        fontSize: '24px',
        color: 'white'
    }

    return(
        <header style={headerStyle}>
            <h1 style={titleStyle}>First System</h1>
        </header>
    );
};
export default Header;