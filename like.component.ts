export class LikeComponent {
  constructor(private _likesCount: number, private _isSelected: boolean) {}

  get likesCount() {
    return this._likesCount;
  }

  get isSelected() {
    return this._isSelected;
  }

  onClick() {
    // Add 1 to likesCount
    // Otherwise, add -1 to likesCount, basically decrease the value of likesCount by 1
    this._likesCount += this._isSelected ? 1 : -1;
    // Toggle _isSelected field
    this._isSelected = !this._isSelected;
  }
}
