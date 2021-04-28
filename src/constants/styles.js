export const commonStyles = {
    fullHeight: {
        height: '100%'
    },
    fullWidth: {
        width: '100%'
    },
    headerIcon: {
		width: 150,
		height: 55,
		resizeMode: 'center',
		marginVertical: 20
    },
    helper: {
        color: '#68B2A0',
        marginTop: 12,
        textAlign: 'center'
    },
    previous: {
        resizeMode: 'cover',
        width: 15,
        height: 15
    },
    menuIcon: {
        resizeMode: 'cover',
        position: 'absolute',
        top: 50,
        left: '8%',
    },
    shadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 4
    },
    previousWrapper: {
        position: 'absolute',
        top: 60,
        left: 35
    }
};

export const text = {
    h1: {
        fontSize: 55,
        lineHeight: 73
    },
    h2: {
        fontSize: 34,
        lineHeight: 45
    },
    h3: {
        fontSize: 21,
        lineHeight: 28
    },
    h4: {
        fontSize: 13,
        lineHeight: 18
    },
    small: {
        fontSize: 7,
        lineHeight: 9
    }
};

export const flex = {
    rowCenter: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    grow: {
        flex: 1
    },
    columnCenter: {
        justifyContent: 'center',
        alignItems: 'center'
    }
}