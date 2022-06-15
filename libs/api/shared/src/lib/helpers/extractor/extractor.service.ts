import { Injectable } from '@nestjs/common';

import {
  Coordinates,
  Location,
  Neo4jOutput,
  Tenure,
  Timezone
} from '../../imports/models';
import { Neo4jNodeMapperService } from '../../imports/services';

@Injectable()
export class ExtractorService {
  constructor(private _mapNode: Neo4jNodeMapperService) {}

  extractLocations(result: Neo4jOutput<Location>): Location[] {
    return result.map(({ output }) => output).map(this._mapNode.toLocation);
  }

  extractCoordinates(result: Neo4jOutput<Coordinates>): Coordinates[] {
    return result.map(({ output }) => output).map(this._mapNode.toCoordinates);
  }

  extractTimezones(result: Neo4jOutput<Timezone>): Timezone[] {
    return result.map(({ output }) => output).map(this._mapNode.toTimezone);
  }

  extractTenures(result: Neo4jOutput<Tenure>): Tenure[] {
    return result.map(({ output }) => output).map(this._mapNode.toTenure);
  }
}
