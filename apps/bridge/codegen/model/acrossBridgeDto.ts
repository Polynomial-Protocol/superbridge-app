/**
 * Generated by orval v6.30.2 🍺
 * Do not edit manually.
 * API
 * API docs
 * OpenAPI spec version: 1.0
 */
import type { ConfirmationDtoV2 } from './confirmationDtoV2';
import type { AcrossBridgeMetadataDto } from './acrossBridgeMetadataDto';
import type { AcrossTransactionType } from './acrossTransactionType';

export interface AcrossBridgeDto {
  createdAt: string;
  deposit: ConfirmationDtoV2;
  fill?: ConfirmationDtoV2;
  fromChainId: number;
  id: string;
  metadata: AcrossBridgeMetadataDto;
  toChainId: number;
  type: AcrossTransactionType;
  updatedAt: string;
}