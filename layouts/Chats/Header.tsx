import React, { useState } from 'react';
import { Backbutton, Userid , Ceader } from './style';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

interface props {
  userId: any;
}

const Header: React.FC<props> = ({userId}) =>{
    const [hover, setHover] = useState(false);

    const handleMouseEnter = () => {
        setHover(true);
      };
    
      const handleMouseLeave = () => {
        setHover(false);
      };        // 뒤로가기 화살표 아이콘에 마우스 포인터를 올려놓을때 색깔이 바뀐다.

    return (
                  <Ceader>
                    <Backbutton
                        className={`button ${hover ? 'hover' : ''}`}
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                    >
                        <FontAwesomeIcon
                        icon={faArrowLeft}
                        style={{ color: hover ? '#ffffff' : '#000000' }}
                        />
                    </Backbutton>

                        <Userid>{userId}</Userid>
                    </Ceader>
    );
}

export default Header;