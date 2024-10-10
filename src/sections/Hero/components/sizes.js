
export const calculateSizes = (isSmall, isMobile, isTablet,isPC, isXL ) => {
    if (isSmall) {
      return {
        avatar: {
          position: [-0.5, -2, -1],
          rotation: [0, 1, 0],
          scale: 1
        },
        
        videoText: {
          text1: {
            position: [-0.16782,-0.0789,-4],
            rotation: [0, 0, 0],
            scale: 1,
            fontSize:0.4
  
          },
          text2: {
            position: [0,-0.81,-4],
            rotation: [0, 0, 0],
            scale: 1,
            fontSize: 1.5
          },
        },
        chair:{
          position:[-0.5, -2, -1],
          scale: 0.01,
          rotation:[0, 1, 0]
        }
      }
    } else if (isMobile ) {
      return {
        avatar: {
          position: [-0.71, -2, -1],
          rotation: [0, 1, 0],
          scale: 1
        },
        videoText: {
          text1: {
            position: [-0.2125,0.05,-4],
            rotation: [0, 0, 0],
            scale: 1,
            fontSize:0.5
  
          },
          text2: {
            position: [0.2,-0.981,-4],
            rotation: [0, 0, 0],
            scale: 1,
            fontSize: 2
          },
        },
        chair:{
          position:[-0.71, -2, -1],
          scale: 0.01,
          rotation:[0, 1, 0]
        }
      }
  
    } else if (isTablet) {
      return {
        avatar: {
          position: [-1.7, -2, -2],
          rotation: [0, 1, 0]
        },
        videoText: {
          text1: {
            position: [-0.61,0.5,-4],
            rotation: [0, 0, 0],
            scale: 1,
            fontSize:0.6
  
          },
          text2: {
            position: [0.25,-0.81,-4],
            rotation: [0, 0, 0],
            scale: 1,
            fontSize: 2.8
          },
        },
        chair:{
          position:[-1.7, -2, -2],
          scale: 0.01,
          rotation:[0, 1, 0]
        }
      }
  
    } else if(isPC) {
      return {
        avatar: {
          position: [-1.9, -2, -2],
          rotation: [0, 1, 0]
        },
        videoText: {
          text1: {
            position: [-0.61,0.5,-4],
            rotation: [0, 0, 0],
            scale: 1,
            fontSize:0.6
  
          },
          text2: {
            position: [0,-0.81,-4],
            rotation: [0, 0, 0],
            scale: 1,
            fontSize: 2.8
          },
        },
        chair:{
          position:[-1.9, -2, -2],
          scale: 0.01,
          rotation:[0, 1, 0]
        }
      }
    } else if (isXL) {
      return {
        avatar: {
          position: [-3, -2, -2],
          rotation: [0, 1, 0]
        },
        videoText: {
          text1: {
            position: [-0.61,0.5,-4],
         
            scale: 1,
            fontSize:0.6
  
          },
          text2: {
            position: [0,-0.81,-4],
            fontSize: 2.8,
       
          },
        },
        chair:{
          position:[-3, -2, -2],
          scale: 0.01,
          rotation:[0, 1, 0]
        }
      }
    }
  };
  