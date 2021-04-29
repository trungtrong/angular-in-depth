import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import {JokeStoreEffects} from '@app/modules/basic/components/ngrx-demo-two/root-state/card-state/card.effects';
import {JokeFeatureKey, reducer} from '@app/modules/basic/components/ngrx-demo-two/root-state/card-state/card.reducer';

@NgModule({
    imports: [
        CommonModule,
        StoreModule.forFeature(JokeFeatureKey, reducer),
        EffectsModule.forFeature([JokeStoreEffects])
    ],
    declarations: []
})
export class JokeStateModule {}
