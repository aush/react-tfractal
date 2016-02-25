import React from 'react';
import * as _ from 'lodash';

function renderTfractal({ cellSize, colorMap, layers, background, opacity }) {
  const width = colorMap.length * cellSize * 2 ** (layers - 1);
  const height = colorMap[0].length * cellSize * 2 ** (layers - 1);

  if (typeof document === 'undefined') {
    return null;
  }
  const canvas = document.createElement('canvas');
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext('2d');
  if (!ctx) {
    return null;
  }

  ctx.fillStyle = background;
  ctx.fillRect(0, 0, width, height);
  ctx.globalAlpha = opacity;

  for (let layer = 0; layer < layers; layer++) {
    const size = cellSize * 2 ** layer;
    const mapSizeX = size * colorMap.length;
    const mapSizeY = size * colorMap[0].length;
    for (let xCoord = 0; xCoord < width; xCoord += mapSizeX) {
      for (let yCoord = 0; yCoord < height; yCoord += mapSizeY) {
        _.forEach(colorMap, (column, indexInRow) =>
          _.forEach(column, (color, indexInColumn) => {
            ctx.fillStyle = color;
            ctx.fillRect(size * indexInRow + xCoord, size * indexInColumn + yCoord, size, size);
          })
        );
      }
    }
  }

  return canvas.toDataURL();
}

export default ({ cellSize, colorMap, layers, background, opacity, style, children, ...rest }) =>
  <div
    style={{
      background: `url(${renderTfractal({ cellSize, colorMap, layers, background, opacity })}) center left`,
      ...style,
    }}
    {...rest}
  >
    {children}
  </div>;
