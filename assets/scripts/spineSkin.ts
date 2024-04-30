



import { _decorator, Component, Node, sp } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('spineSkin')
export class spineSkin extends Component {



    @property({ type:sp.Skeleton })
    spine: sp.Skeleton | null = null;

    skinId: number = 0;

    start () 
    {
        // Your initialization goes here.
        // sp.Skeleton 
        this.change() ;
    }

    change() 
    {
        console.log( 'button clicked ' )
        const skins = ['girl', 'boy', 'girl-blue-cape', 'girl-spring-dress'].map(x=> `full-skins/${x}`);
        this.skinId = (this.skinId + 1) % skins.length;
        this.spine!.setSkin(skins[this.skinId]);
    }

    update (deltaTime: number) {
    // Your update function goes here.
    }
}





















