import React from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import { Can } from './AbilityContext';
import { ability } from './defineAbility';
import { subject } from '@casl/ability';

export const CaslDemo = () => {
	return (
		<Container style={{ textAlign: "center" }}>
			<Row>
				<Can I="read" a="Todo">
					<Col className="mx-2 my-2" id="1">
						<input type="checkbox" />
						<span className="mx-2 my-2">Add</span>						
					</Col>
				</Can>
			</Row>
			<Row>
				<Can I="write" a="Todo">
					<Col className="mx-2 my-2" id="2">
						<input type="checkbox"/>
						<span className="mx-2 my-2">Update</span>
					</Col>
				</Can>
			</Row>
			<Row>
				{ ability.can('read', 'Todo') &&
					<Col className="mx-2 my-2" id="3">
						<input type="checkbox"/>
						<span className="mx-2 my-2">Create</span>
					</Col>
				}
			</Row>
			<Row>
				{ ability.can('write', subject('Todo', {id: 4})) &&
					<Col className="mx-2 my-2" id="4">
						<input type="checkbox" />
						<span className="mx-2 my-2">Delete</span>
					</Col>
				}
			</Row>
		</Container>
	)
}