import { _decorator, Component, sp } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('spineVertexEffect')
export class spineVertexEffect extends Component {

    @property({ type:sp.Skeleton })
    skeleton: sp.Skeleton | null = null;

    private _jitterEffect:sp.VertexEffectDelegate;

    start () 
    {
        
    }

    spienVertex_JitterEffect()
    {
        this._jitterEffect = new sp.VertexEffectDelegate();
        // Set the jitter parameters.
        this._jitterEffect.initJitter(20, 20);
        // Call the 'setVertexEffectDelegate' method of the Skeleton component to set the effect.
        this.skeleton!.setVertexEffectDelegate(this._jitterEffect!);
    }

};