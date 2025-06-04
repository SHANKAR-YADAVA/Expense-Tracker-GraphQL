const GridBackground = ({ children }) => {
	return (
		<div style={{
			minHeight: '100vh',
			width: '100%',
			backgroundColor: 'black',
			color: 'white',
			position: 'absolute',
			top: 0,
			left: 0,
			backgroundImage: `
				linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
				linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)
			`,
			backgroundSize: '32px 32px',
			zIndex: -1
		}}>
			{children}
		</div>
	);
};

export default GridBackground;
