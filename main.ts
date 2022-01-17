import { LikeComponent } from './like.component';

const component = new LikeComponent(10, true);
component.onClick();
console.log(
  `likesCount: ${component.likesCount}, isSelected: ${component.isSelected}`
);
