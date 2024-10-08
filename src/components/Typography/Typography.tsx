interface TypographyProps {
    variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span';
    className?: string;
    color?: string;
    align?: 'left' | 'center' | 'right';
    font?: 'Playfair Display' | 'Gladis' | 'BP Black White' | 'Meie Script' | 'Madjestic Comfort Serif';
    fontSize?: string;
    children: React.ReactNode;
}

const Typography: React.FC<TypographyProps> = ({ 
    variant = 'p', 
    className = '', 
    color='black', 
    align = 'center', 
    font = 'Playfair Display', 
    fontSize, 
    children 
}) => {
    const Component = variant;

    return (
        <Component 
            style={{ color, textAlign: align, fontFamily: font, fontSize: fontSize }}
            className={className}
        >
            {children}
        </Component>
    );
};

export default Typography;
