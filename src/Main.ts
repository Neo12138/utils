import Test = test.Test;

class Main extends egret.DisplayObjectContainer {

    public constructor() {
        super ();

        this.addEventListener (egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
    }

    private onAddToStage(): void {
        let test = new Test();
        test.testTypeOf();
        test.testArrayEqual();
        test.testObjectEqual();
        test.testTimeFormat();
        test.testCookie();
    }

}