import React from "react";

const useChaseTail = (mousePosition = { x: 0, y: 0 }, movementThresholdInPixels = 10) => {
  const [newMousePosition, setPosition] = React.useState(mousePosition);
  const [tail, setTail] = React.useState([{ x: 0, y: 0 }]);

  const handleMouseMove = (e) => {
    setPosition({ x: e.clientX, y: e.clientY });
  };

  React.useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  React.useEffect(() => {
    setTail((prev) => {
      if (prev.length === 0) {
        return prev;
      }

      const newTail = [...prev];
      if (newTail.length < 1) {
        return newTail;
      }

      // rotate new positions into tail based on mouse position offset
      const endOfTailPosition = newTail[newTail.length - 1];
      const deltaX = endOfTailPosition.x - newMousePosition.x;
      const deltaY = endOfTailPosition.y - newMousePosition.y;
      // calculate the vector from the end of the tail to the current mouse position
      const hypotenusVector = Math.sqrt((deltaX ** 2) + (deltaY ** 2));
      if (hypotenusVector > movementThresholdInPixels) {
        newTail.pop();
        newTail.unshift(newMousePosition);
      } else if (newTail.length < movementThresholdInPixels){
        newTail.push(newMousePosition);
      }

      return newTail;
    });
  }, [newMousePosition, movementThresholdInPixels]);

  return { newMousePosition, tail };
}

export default useChaseTail;
