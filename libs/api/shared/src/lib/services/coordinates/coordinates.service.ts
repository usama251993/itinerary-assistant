import { Injectable } from '@nestjs/common';

import { Coordinates, CoordinatesDTO, Neo4jOutput } from '../../imports/models';

import { ExtractorService } from '../../helpers';
import { CoordinatesRepository } from '../../repositories';

@Injectable()
export class CoordinatesService {
  constructor(
    private _repository: CoordinatesRepository,
    private _extractor: ExtractorService
  ) {}

  async getCoordinates(id = ''): Promise<Coordinates> {
    const result = await this._repository.getCoordinates(id);
    return this._extractor.extractCoordinate(
      result as Neo4jOutput<Coordinates>
    );
  }

  async createCoordinates(coordinates: CoordinatesDTO): Promise<Coordinates> {
    const id = new Coordinates({ ...coordinates }).generateUUID();
    const result = await this._repository.createCoordinates(id, coordinates);
    return this._extractor.extractCoordinate(
      result as Neo4jOutput<Coordinates>
    );
  }

  async updateCoordinates(
    id = '',
    coordinates: CoordinatesDTO
  ): Promise<Coordinates> {
    const result = await this._repository.updateCoordinates(id, coordinates);
    return this._extractor.extractCoordinate(
      result as Neo4jOutput<Coordinates>
    );
  }

  async deleteCoordinates(id = ''): Promise<Coordinates> {
    const result = await this._repository.deleteCoordinates(id);
    return this._extractor.extractCoordinate(
      result as Neo4jOutput<Coordinates>
    );
  }

  async associateCoordinatesWithLocation(
    coordinatesId = '',
    locationId = ''
  ): Promise<Coordinates> {
    const check = await this.checkCoordinatesOfRelationship(
      coordinatesId,
      locationId
    );
    const result = check
      ? await this._repository.getCoordinates(coordinatesId)
      : await this._repository.associateCoordinatesWithLocation(
          coordinatesId,
          locationId
        );
    return this._extractor.extractCoordinate(
      result as Neo4jOutput<Coordinates>
    );
  }

  async checkCoordinatesOfRelationship(
    coordinatesId: string,
    locationId: string
  ): Promise<boolean> {
    const result = await this._repository.checkCoordinatesOfRelationship(
      coordinatesId,
      locationId
    );
    return !!result.length;
  }
}
