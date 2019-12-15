import { province,city } from './region.js';

var list = [];
Component({
    properties:{
        show:{
            type:Boolean,
            default:false
        }
    },
    data:{
        multiIndex:[],
        multiArray: province,
        objectMultiArray:city
    },
    methods: {
        bindMultiPickerChange(e){
            this.setData({
                "multiIndex[0]": e.detail.value[0],
                "multiIndex[1]": e.detail.value[1]
            })
            const index = e.detail.value[0];
            const index1 = e.detail.value[1];
            this.triggerEvent('sure',{
                val:this.data.multiArray[0][index]+","+this.data.multiArray[1][index1]
            });
        },
        bindMultiPickerColumnChange(e){
            switch (e.detail.column){
                case 0:
                list = []
                for (var i = 0; i < this.data.objectMultiArray.length;i++){
                    if (this.data.objectMultiArray[i].parid == this.data.objectMultiArray[e.detail.value].regid){
                        list.push(this.data.objectMultiArray[i].regname)
                    }
                }
                this.setData({
                    "multiArray[1]": list,
                    "multiIndex[0]": e.detail.value,
                    "multiIndex[1]" : 0
                })
            }
        }
    },
    lifetimes:{
        created(){
            
        }
    }
})