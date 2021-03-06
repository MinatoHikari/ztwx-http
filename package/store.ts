export class Store<T> {
  maxCount: number;
  disCount: number;
  maxCountRel: number;
  size = 0;

  constructor(maxCount = 100, disCount = 10) {
    this.maxCount = maxCount;
    this.disCount = disCount;
    this.maxCountRel = this.disCount + this.maxCount;
  }

  map: Map<string, T> = new Map<string, T>();

  setValue(key: string, value: any) {
    if (this.size >= this.maxCountRel) this.clearNest();
    this.map.set(key, value);
  }

  getValue(key: string): any {
    return this.map.get(key);
  }

  deleteKey(key: string): any {
    this.map.delete(key);
  }

  clearNest() {
    let currentIndex = 0;
    for (const key of this.map.keys() as any) {
      if (currentIndex++ >= this.maxCount) break;
      this.map.delete(key);
    }
  }
}
